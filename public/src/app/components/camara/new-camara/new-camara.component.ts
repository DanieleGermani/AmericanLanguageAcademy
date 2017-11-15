import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {CamaraService} from '../../../services/camara.service';
import {Camara} from '../camara';
// import {TextObjects} from '../comic';

@Component({
  selector: 'app-new-camara',
  templateUrl: './new-camara.component.html',
  styleUrls: ['./new-camara.component.css']
})
export class NewCamaraComponent implements OnInit {
  @Output() createNewCamaraEvent = new EventEmitter();
   newCamara = new Camara;

  constructor() { }

  ngOnInit() {

  }
  create() {
     this.createNewCamaraEvent.emit(this.newCamara);
     console.log(this.newCamara);
     this.newCamara = new Camara();

    }

}
