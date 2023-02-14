import { LightningElement, wire, api } from 'lwc';
import repoInsertion from '@salesforce/apex/gitRepoController.insertRepo';
import { loadStyle,loadScript } from 'lightning/platformResourceLoader';
import myBulma from '@salesforce/resourceUrl/Bulma';
import { subscribe, unsubscribe, APPLICATION_SCOPE, MessageContext } from 'lightning/messageService';
import searchMessage from '@salesforce/messageChannel/MessageChannelForCoversations__c';
const QUERY_USER_ENDPOINT_URL = ' https://api.github.com/search/repositories?q=';

export default class SearchTextResult extends LightningElement {

    @api repoName;
    gettingRepos = [];
    selectedRepo = '';
    subscription = null;

    @wire(MessageContext)
    messageContext;

    connectedCallback() {
        this.subscribeToMessageChannel();
        loadStyle(this, myBulma);
        loadScript(this, myBulma);
    }

    disconnectedCallback() {
        this.unsubscribeToMessageChannel();
    }

    // Encapsulate logic for Lightning message service subscribe and unsubsubscribe
    subscribeToMessageChannel() {
        if (!this.subscription) {
            this.subscription = subscribe(
                this.messageContext,
                searchMessage,
                (message) => this.handleMessage(message),
                { scope: APPLICATION_SCOPE }
            );
        }
    }

    async handleMessage(message) {
        console.log('handleMessage:', message);
        this.repoName = message.searchInput;
        let queryEndPoint = QUERY_USER_ENDPOINT_URL + this.repoName;
        console.log('queryEndPoint--->', queryEndPoint);
        try {
            const RESPONSE = await fetch(queryEndPoint);
            const REPO_LIST = await RESPONSE.json();
            console.log(REPO_LIST.items);
            this.gettingRepos = REPO_LIST.items;
        } catch (error) {
            console.log(error);
        }
    }

    unsubscribeToMessageChannel() {
        unsubscribe(this.subscription);
        this.subscription = null;
    }
    handleonuserclicked(event) {
     this.selectedRepo = event.detail;
    }
}