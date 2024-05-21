import { InjectionToken } from "@angular/core";
import { LoggerService } from "../services/logger.service";

export const UUID_INJECTION_TOKEN = new InjectionToken<() => string>(
  "UUID_INJECTION_TOKEN"
);
