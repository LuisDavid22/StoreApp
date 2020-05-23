import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { QuantityBoxComponent } from "./quantity-box/quantity-box.component";

@NgModule({
  declarations: [QuantityBoxComponent],
  imports: [CommonModule],
  exports: [QuantityBoxComponent],
})
export class SharedModule {}
