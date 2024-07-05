import { LightningElement, api } from 'lwc';

export default class Marco extends LightningElement {
    @api familiar;

    localFunctionMarcoClick() {
        const event = new CustomEvent('listaclick', { 
            detail: this.familiar.id 
        });
        console.log('marco.js:localFunctionMarcoClick:dispatching->listaclick:event', JSON.stringify(event));
        this.dispatchEvent(event);
    }    
}