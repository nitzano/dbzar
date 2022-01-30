import debug, {Debugger} from 'debug';

export const debugNamespace = 'dbzar';

export const debugLogger: Debugger = debug(debugNamespace);
