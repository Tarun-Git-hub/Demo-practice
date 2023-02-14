import { LightningElement } from 'lwc';
import { loadStyle } from 'lightning/platformResourceLoader';
import myBulma from '@salesforce/resourceUrl/Bulma';
export default class Bulma extends LightningElement {
    connectedCallback() {
        loadStyle(this, myBulma);
    }

}