import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {RestService} from '../../rest.service';
import {Network} from '../../networks/network.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  networkSubs: Subscription;
  networks = [];
  baner: string;
  name: string;
  age: number;
  email: string;

  siecies: string[];
  allowNewServer = false;
  serverCreationStatus = 'No server was createrd';
  time: Date = new Date();
  serverName = 'Default server name [two way data binding]';

  images: string[] = [
    'http://maxpixel.freegreatpicture.com/static/photo/1x/Neural-Network-Neural-Network-Science-Neuron-1487112.jpg',
    'http://www.publicdomainpictures.net/pictures/10000/velka/neural-networks-277512834557004puG.jpg',
    'http://internet.uniroma2.it/en/wp-content/uploads/sites/2/2016/02/mining1.jpg'
  ];
  netwrks: Network[] = [
    new Network('First network name', 'First network description')
  ];
  tempDatas: string[];

  constructor(public restService: RestService) {
    console.log('constructor ran...');
    setInterval(() => {
      this.time = new Date();
      }, 1);
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
    this.restService.getDashboardData();
    this.networkSubs = this.restService.networksChanged
      .subscribe(
        (networks) => {
          this.networks = networks['networks'];
          console.log(networks);
        });
    console.log('ngOnInit ran...');


    this.baner = 'Sieci dla nas.';
    this.name = 'named by ngOniit';
    this.age = 30;
    this.siecies = [
      'siec1ex',
      'siec2ex',
      'siec3ex',
      'siec4ex',
      'siec5ex',
      'siec6ex',
      'siec7ex',
      'siec8ex',
    ];
  }

  deleteNetwork(pk) {
    const link = '/network/delete';
    this.restService.sendData( {'pk': pk}, link);
  }
  addNetwork(name) {
    const link = '/network/add';
    this.restService.sendData( {'name': name.value}, link);
  }

  onClick() {
    console.log('button_login');
    this.baner = 'Witaj ' +  this.name;
    }

  addSiec(siec) {
    console.log('siec ' + siec + ' added.');
    this.siecies.unshift(siec);
    return false;
  }

  deleteSiec(siec) {
    console.log('removed');
    for (let i = 0; i < this.siecies.length; i++) {
      if (this.siecies[i] === siec) {
        this.siecies.splice(i, 1);
      }
    }
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created';
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}


