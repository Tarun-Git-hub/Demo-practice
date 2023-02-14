import { LightningElement,api } from 'lwc';

export default class SearchCodeChildAnta extends LightningElement {
    @api retrivedRepo;
    handlebuttonClick(){
        const selectedEvent = new CustomEvent('userclicked', { detail: this.retrivedRepo.name});

        // Dispatches the event.
        this.dispatchEvent(selectedEvent);
    }
}