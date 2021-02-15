import { existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import { createLogger, format, transports } from 'winston';

//import { env } from './globals';

const logDir = 'logs';

// Create the log directory if it does not exist
if (!existsSync(logDir)) {
	mkdirSync(logDir);
}

const errorLog = join(logDir, 'error.log');

const isRequest = format((info, opts) => {
	if (info.isRequest) {
		return info;
	}
	return false;
});

export const logger = createLogger({
	level: 'info',
	format: format.combine(
		format.timestamp({
			format: 'YYYY-MM-DD HH:mm:ss'
		}),
		format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
	),
	transports: [
		new transports.File({
			filename: errorLog,
		
        }),
      
	],
	exceptionHandlers: [
		new transports.File({
			filename: errorLog
		})
	]
});

// if (env.NODE_ENV !== 'production') {
// 	logger.add(
// 		new transports.Console({
// 			format: format.combine(
// 				format.colorize(),
// 				format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
// 			),
// 			level: 'debug'
// 		})
// 	);
// }
