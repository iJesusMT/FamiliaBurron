import { LightningElement } from 'lwc';

export default class FamilaBurron extends LightningElement {
    personajeSeleccionadoId;

    onPersonajeSeleccionado(event){
        this.personajeSeleccionadoId = event.detail;
    }
}