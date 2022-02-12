import debug, {Debugger} from 'debug';

export const debugNamespace = 'dbzar';

export const debugLogger: Debugger = debug(debugNamespace);

export const createLogger: (loggerName: string) => Debugger = (
	loggerName = 'root',
) => debugLogger.extend(loggerName);
