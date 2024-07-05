import { LightningElement, api } from 'lwc';
import { familia } from 'c/data';

export default class Detalle extends LightningElement {
    familiar;

    _personajeId = undefined;
    
    set personajeId(value){
        this._personajeId = value;
        this.familiar = familia.find(element => element.id === this._personajeId);
        console.log('detalle.js:set personajeId:event.detail', this._personajeId);
    }

    @api get personajeId(){
        console.log('detalle.js:get personajeId:event.detail', this._personajeId);
        return this._personajeId;
    }
}