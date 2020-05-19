import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.scss"],
})
export class ProductDetailComponent implements OnInit {
  productId: number;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.productId = +this.route.snapshot.paramMap.get("id");
    console.log(this.productId + "");
  }
}
