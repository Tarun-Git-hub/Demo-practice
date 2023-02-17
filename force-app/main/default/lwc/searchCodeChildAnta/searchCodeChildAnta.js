import { LightningElement,api } from 'lwc';

export default class SearchCodeChildAnta extends LightningElement {
    @api retrivedRepo;

    handleButtonClick(){
        const selectedEvent = new CustomEvent('selected', { detail: this.retrivedRepo.name });
       // Dispatch the event.
        this.dispatchEvent(selectedEvent);
    }
}