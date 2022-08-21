import winston, { format } from 'winston';

const { combine } = format;

const winstonConfig = {
  level: 'info',
  handleExceptions: true,
  format: combine(winston.format.colorize(), winston.format.simple())
};

const transports = [new winston.transports.Console(winstonConfig)];

const morganConfig = () => {
  if (process.env.APP_ENV === 'dev') {
    return {
      format: 'dev',
      parse: (message) => new Date().toISOString() + ' ' + message.trim()
    };
  } else {
    return {
      format: 'combined',
      parse: (message) => message.trim()
    };
  }
};

const baseLogger = winston.createLogger({
  transports,
  exitOnError: false
});

export const logger = Object.assign(baseLogger, { morganConfig });
