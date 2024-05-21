import { Component, Inject } from "@angular/core";
import { SayHello } from "./services/sayHello.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  /*   helloService = new SayHello(); */
  /* Donne moi un HELLO */
  constructor(private helloService: SayHello) {
    this.helloService.hello();
  }
  title = "Starting Advanced Topics";
}
