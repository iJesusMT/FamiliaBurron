import { LightningElement } from 'lwc';
import { familia } from 'c/data';

export default class Lista extends LightningElement {
    familia = familia;

    onMarcoClick(event) {
        const evt = new CustomEvent('personajeseleccionado', { 
            detail: event.detail 
        });
        this.dispatchEvent(evt);
    }
}