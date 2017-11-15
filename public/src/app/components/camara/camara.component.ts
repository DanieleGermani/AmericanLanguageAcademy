import { Component, OnInit } from '@angular/core';

import {CamaraService} from '../../services/camara.service';
import {Camara} from './camara';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.component.html',
  styleUrls: ['./camara.component.css']
})
export class CamaraComponent implements OnInit {
  camaras: Camara[] = [];

  constructor(private _camaraService: CamaraService) { }

  ngOnInit() {
    this.getCamaras();
  }
  getCamaras() {
     this._camaraService.getCamaras()
      .then(camaras => this.camaras = camaras)
      .catch(err => console.log(err));
  }

  create(camara: Camara){
    this._camaraService.create(camara)
      .then(status => this.getCamaras())
      .catch(err => console.log(err));
  }


}
