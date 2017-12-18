import { Component, OnInit, Input } from '@angular/core';
import {log} from 'util';
import {Network} from './network.model';

@Component({
  selector: 'app-networks',
  templateUrl: './networks.component.html',
  styleUrls: ['./networks.component.css'],
})
export class NetworksComponent implements OnInit {
  newName: string;
  newDescription: string;
  validateName: boolean;
  validateDescr: boolean;
  status = false;
  showContent: boolean;
  addNetworkBtn: string = (!this.status) ? 'Dodaj nową sieć' : 'Anuluj';
  constructor() { }

  @Input() addNewNetwork: Network;

  ngOnInit() {
  }


  onUpdateNetworkName(event: Event) {
    this.newName = (<HTMLInputElement>event.target).value;
    if (this.newName.length === 0 || this.newName === ' ')
      this.validateName = false;
    else this.validateName = true;
    log(String(this.newName.length) + this.validateName);
  }

   onUpdateNetworkDescription(event: Event) {
    this.newDescription = (<HTMLInputElement>event.target).value;
    if (this.newDescription.length === 0 || this.newDescription === ' ')
      this.validateDescr = false;
    else this.validateDescr = true;
    log(String(this.newDescription.length) + this.validateDescr);
  }

  onUpdateNewNetworkButton(event: Event) {
    if (this.validateDescr || this.validateName)
    {
      log('new network added: [name] ' + this.newName + ' [descr] ' + this.newDescription );
      this.addNewNetwork.name = this.newName;
      this.addNewNetwork.description = this.newDescription;
    }
  }
}
