import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input()userName:string;
  @Input()cartItems:number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
