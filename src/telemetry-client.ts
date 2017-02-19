import {logLevel} from 'aurelia-logging';
import {TelemetryClient} from 'aurelia-telemetry';

const levelMap = new Map<number, string>();
levelMap.set(logLevel.debug, 'debug');
levelMap.set(logLevel.info, 'info');
levelMap.set(logLevel.warn, 'warn');
levelMap.set(logLevel.error, 'error');

export class GoogleAnalyticsTelemetryClient extends TelemetryClient {

  private ga: any = (window as any).ga;
  
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
      eventAction: levelMap.get(level),
      eventLabel: message,
    });
  }
}
