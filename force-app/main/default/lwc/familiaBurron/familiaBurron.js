import { LightningElement, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import Id from '@salesforce/user/Id';
import COLUMNA_NOMBRE from '@salesforce/schema/User.Name';
const columnas = [COLUMNA_NOMBRE];

export default class FamilaBurron extends LightningElement {
    personajeSeleccionadoId;

    localFunctionPersonajeSeleccionado(event){
        this.personajeSeleccionadoId = event.detail;
        console.log('familiaBurron.js:localFunctionPersonajeSeleccionado:event.detail', event.detail);
    }

    userId = Id;
    @wire(getRecord, {recordId: '$userId', fields: columnas})
    user;
    get name(){
        console.log('familiaBurron.js:@wire(getRecord):user', JSON.stringify(this.user));
        return getFieldValue(this.user.data, COLUMNA_NOMBRE);
    }    
}