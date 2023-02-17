import { LightningElement, wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import searchContent from '@salesforce/messageChannel/MessageChannelForCoversations__c';


export default class SearchCodeRoii extends LightningElement {
    inputRepo='';


    @wire(MessageContext)
    messageContext;
    handleChange(event) {
        let inputvalue = this.template.querySelectorAll("lightning-input")[0].value;
        const payload = { searchInput: inputvalue };
          this.inputRepo = inputvalue.toUpperCase();
        publish(this.messageContext, searchContent, payload);
    }
}