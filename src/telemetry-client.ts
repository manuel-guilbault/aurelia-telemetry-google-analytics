import {logLevel} from 'aurelia-logging';
import {TelemetryClient} from 'aurelia-telemetry';

export class GoogleAnalyticsTelemetryClient extends TelemetryClient {

  levelMap: Map<number, string>;

  constructor() {
    super();
    this.levelMap = new Map<number, string>();
    this.levelMap.set(logLevel.debug, 'debug');
    this.levelMap.set(logLevel.info, 'info');
    this.levelMap.set(logLevel.warn, 'warn');
    this.levelMap.set(logLevel.error, 'error');
  }

  private mapToEventAction(logLevel: number) {
    return this.levelMap.get(logLevel) || 'default'
  }
  
  trackPageView(path: string) {
    ga('set', { page: path });
    ga('send', 'pageview');
  }

  trackEvent(name: string, properties?: { [key: string]: any }) {
    ga('send', 'event', Object.assign({
      eventCategory: 'event',
      eventAction: name,
    }, properties));
  }

  trackError(error: Error) {
    ga('send', 'exception', {
      exDescription: `${error.name}: ${error.message}`,
    });
  }

  trackLog(message: string, level: number, ...args: any[]) {
    ga('send', 'event', {
      eventCategory: 'log',
      eventAction: this.mapToEventAction(level),
      eventLabel: message,
    });
  }
}
