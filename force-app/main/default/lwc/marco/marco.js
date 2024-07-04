import { LightningElement, api } from 'lwc';

export default class Marco extends LightningElement {
    @api familiar;

    marcoClick() {
        const event = new CustomEvent('marcoclick', { 
            detail: this.familiar.id 
        });
        this.dispatchEvent(event);
    }    
}