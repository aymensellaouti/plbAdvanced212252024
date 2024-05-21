import { InjectionToken } from "@angular/core";
import { LoggerService } from "../services/logger.service";

export const LOGGER_INJECTION_TOKEN = new InjectionToken<LoggerService>(
  "LOGGER_INJECTION_TOKEN"
);
