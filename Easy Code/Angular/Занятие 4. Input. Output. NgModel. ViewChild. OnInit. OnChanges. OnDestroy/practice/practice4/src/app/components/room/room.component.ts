import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-room",
  templateUrl: "./room.component.html",
  styleUrls: ["./room.component.css"]
})
export class RoomComponent implements OnInit {
  @Input() parentValue: string;
  @Output() outputEventObj = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  onSomeChanges() {
    this.outputEventObj.emit("Hello from room #1");
  }
}
