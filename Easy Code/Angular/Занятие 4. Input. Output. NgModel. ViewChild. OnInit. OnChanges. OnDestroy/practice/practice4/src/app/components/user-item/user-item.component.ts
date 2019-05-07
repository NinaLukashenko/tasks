import {
  Component,
  OnInit,
  OnChanges,
  OnDestroy,
  Input,
  Output,
  EventEmitter
} from "@angular/core";

interface MyMessage {
  text: string;
  user?: any;
}

@Component({
  selector: "app-user-item",
  templateUrl: "./user-item.component.html",
  styleUrls: ["./user-item.component.css"]
})
export class UserItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() parentValue: string;
  @Input() secondParentValue: string;
  @Input() user;
  @Output() outputInfo: EventEmitter<MyMessage> = new EventEmitter<MyMessage>();
  constructor() {}

  ngOnChanges(changes) {
    console.log(changes);
  }

  ngOnInit() {
    console.log(this.parentValue);
    console.log(this.secondParentValue);
  }

  ngOnDestroy(): void {
    console.log("Destroy");
  }

  onClickHandler() {
    this.outputInfo.emit({
      text: "Hello from child component!",
      user: this.user
    });
  }
}
