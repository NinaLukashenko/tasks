import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-house",
  templateUrl: "./house.component.html",
  styleUrls: ["./house.component.css"]
})
export class HouseComponent implements OnInit {
  address = "Kiev";

  constructor() {}

  ngOnInit() {}

  onChildEvent(data) {
    console.log(data);
  }
}
