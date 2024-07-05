import { LightningElement } from 'lwc';
import { familia } from 'c/data';

export default class Lista extends LightningElement {
    familia = familia;

    localFunctionListaClick(event) {
        const evt = new CustomEvent('personajeseleccionado', { 
            detail: event.detail 
        });
        console.log('lista.js:localFunctionListaClick:dispatching->personajeseleccionado:evt', JSON.stringify(evt));
        this.dispatchEvent(evt);
    }
}