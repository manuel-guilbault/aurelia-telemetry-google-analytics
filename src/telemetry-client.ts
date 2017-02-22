import {logLevel} from 'aurelia-logging';
import {TelemetryClient} from 'aurelia-telemetry';

export class GoogleAnalyticsTelemetryClient extends TelemetryClient {

  private ga: any = (window as any).ga;
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
    this.ga('set', { page: path });
    this.ga('send', 'pageview');
  }

  trackEvent(name: string, properties?: { [key: string]: any }) {
    this.ga('send', 'event', Object.assign({
      eventCategory: 'event',
      eventAction: name,
    }, properties));
  }

  trackError(error: Error) {
    this.ga('send', 'exception', {
      exDescription: error.message,
    });
  }

  trackLog(message: string, level: number, ...args: any[]) {
    this.ga('send', 'event', {
      eventCategory: 'log',
      eventAction: this.mapToEventAction(level),
      eventLabel: message,
    });
  }
}
