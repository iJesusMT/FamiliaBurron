import { LightningElement, api } from 'lwc';
import { familia } from 'c/data';

export default class Detalle extends LightningElement {
    familiar;

    _personajeId = undefined;
    
    set personajeId(value){
        this._personajeId = value;
        this.familiar = familia.find(element => element.id === this._personajeId);
    }

    @api get personajeId(){
        return this._personajeId;
    }
}