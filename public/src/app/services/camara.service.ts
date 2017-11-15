import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Camara} from '../components/camara/camara';



import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CamaraService {
  

  constructor(private _http:Http) { }

  create(camara: Camara,){
    return this._http.post('/camaras', camara)
      .map(data => data.json()).toPromise()

  }
  getCamaras() {
    return this._http.get('/camaras')
    .map(data => data.json()).toPromise()
  }

  getCamara(camara: Camara) {
    return this._http.get('/camaras/' + camara._id)
    .map(data => data.json()).toPromise()
  }


}
