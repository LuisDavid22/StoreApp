import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "quantity-box",
  templateUrl: "./quantity-box.component.html",
  styleUrls: ["./quantity-box.component.scss"],
})
export class QuantityBoxComponent implements OnInit {
  value: number = 1;
  @Output() valueChanged: EventEmitter<number> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  addNumber() {
    this.value++;
    this.valueChanged.emit(this.value);
  }

  substractNumber() {
    if (this.value > 0) {
      this.value--;
      this.valueChanged.emit(this.value);
    }
  }
}
