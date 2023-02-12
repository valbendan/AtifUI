import log from "electron-log"

interface BrowserLogger {
  info(message?: string, ...optionalParams: any[]): void,

  debug(message?: string, ...optionalParams: any[]): void,

  warn(message?: string, ...optionalParams: any[]): void,

  error(message?: string, ...optionalParams: any[]): void,
}

/**
 * 获取浏览器的日志记录器
 * @param scope
 */
export function getBrowserLogger(scope: string): BrowserLogger {
  return log.scope(scope)
}
