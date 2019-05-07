import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  info = "some info";
  news = "last news";
  userItemIsHiden = false;
  users = [
    {
      name: "Nina",
      age: 30
    },
    {
      name: "Denis",
      age: 35
    }
  ];
  constructor() {}

  ngOnInit() {}

  onOutputEvent(msg) {
    console.log(msg);
  }

  changeInfoDataHandler() {
    this.info += " Some new Info";
    this.users[1].name = "Den";
  }
}
