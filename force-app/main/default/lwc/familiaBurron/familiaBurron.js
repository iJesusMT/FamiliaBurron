import { LightningElement, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import Id from '@salesforce/user/Id';
import COLUMNA_NOMBRE from '@salesforce/schema/User.Name';
const columnas = [COLUMNA_NOMBRE];

export default class FamilaBurron extends LightningElement {
    personajeSeleccionadoId;

    onPersonajeSeleccionado(event){
        this.personajeSelecciona
        doId = event.detail;
    }

    userId = Id;
    @wire(getRecord, {recordId: '$userId', fields: columnas})
    user;
    get name(){
        console.log('this.user.data', JSON.stringify(this.user.data));
        console.log('Id:',Id);
        return getFieldValue(this.user.data, COLUMNA_NOMBRE);
    }    
}