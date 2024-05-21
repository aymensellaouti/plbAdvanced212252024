import { Component, Inject } from "@angular/core";
import { SayHello } from "./services/sayHello.service";
import { LoggerService } from "./services/logger.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  /*   helloService = new SayHello(); */
  /* Donne moi un HELLO */
  constructor(@Inject(LoggerService) private loggerService: LoggerService[]) {
    this.loggerService.forEach((logger) =>
      logger.logger("cc je teste le multi")
    );
  }
  title = "Starting Advanced Topics";
}
