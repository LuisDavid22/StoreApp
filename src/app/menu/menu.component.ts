import { Component, OnInit, Input } from "@angular/core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent implements OnInit {
  @Input() userName: string;
  @Input() cartItems: number = 0;
  constructor() {}
  faCoffee = faCoffee;
  ngOnInit(): void {}
}
