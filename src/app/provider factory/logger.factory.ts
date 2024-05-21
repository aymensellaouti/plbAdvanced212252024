import { LoggerService } from "../services/logger.service";

export function loggerFactory(): LoggerService {
  return new LoggerService();
}
