import { Component, OnInit, Input } from '@angular/core';
import {Network} from '../network.model';

@Component({
  selector: 'app-network-list',
  templateUrl: './network-list.component.html',
  styleUrls: ['./network-list.component.css'],
})
export class NetworkListComponent implements OnInit {
  networks: Network[] = [
    new Network('Sieć neuronowa #1', 'Przykładowy opis sieci ...'),
    new Network('Sieć neuronowa #2', 'Przykładowy opis sieci ...'),
    new Network('Sieć neuronowa #3', 'Przykładowy opis sieci ...')
  ];

  constructor() { }

  ngOnInit() {
  }

}
