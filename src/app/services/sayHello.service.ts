import { Inject, Injectable } from "@angular/core";
import { LOGGER_INJECTION_TOKEN } from "../injection tokens/logger.injection-token";
import { LoggerService } from "./logger.service";

@Injectable({ providedIn: "root" })
export class SayHello {
  constructor(private logger: LoggerService) {
    this.logger.logger("CC Ophélie");
  }

  hello() {
    this.logger.logger("Hello");
  }
}
