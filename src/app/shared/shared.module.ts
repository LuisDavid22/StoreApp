import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { QuantityBoxComponent } from "./quantity-box/quantity-box.component";

@NgModule({
  declarations: [QuantityBoxComponent],
  imports: [CommonModule, FontAwesomeModule],

  exports: [QuantityBoxComponent, FontAwesomeModule],
})
export class SharedModule {}
