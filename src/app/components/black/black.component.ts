import { Component, OnInit, Input } from '@angular/core';
import { DemoservService } from '../demoserv/demoserv.service';

@Component({
  selector: 'app-black',
  templateUrl: './black.component.html',
  styleUrls: ['./black.component.css']
})
export class BlackComponent implements OnInit {
  @Input()
  products: any = [];


constructor( private demoServ2: DemoservService ) {
    this.getItems();
   }
   getItems() {
     this.products = this.demoServ2.getItems();
   }

  ngOnInit() {
  }

}
