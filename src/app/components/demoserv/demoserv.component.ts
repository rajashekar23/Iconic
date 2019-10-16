import { Component, OnInit, Input } from '@angular/core';
import { DemoservService } from './demoserv.service';

@Component({
  selector: 'app-demoserv',
  templateUrl: './demoserv.component.html',
  styleUrls: ['./demoserv.component.css']
})
export class DemoservComponent implements OnInit {

  @Input()
  products: any = [];

  constructor( private demoServ: DemoservService ) {
    this.getItems();
   }


   getItems() {
     this.products = this.demoServ.getItems();
   }

  ngOnInit() {
  }

}
