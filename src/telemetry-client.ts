import {TelemetryClient, PageViewProperties, EventProperties, ErrorProperties, LogProperties} from 'aurelia-telemetry';

export class GoogleAnalyticsTelemetryClient extends TelemetryClient {
  
  trackPageView(properties: PageViewProperties) {
    const otherProperties = Object.assign({}, properties);
    delete otherProperties.title;
    delete otherProperties.path;

    (window as any).ga('set', {
      page: properties.path,
      title: properties.title,
    });
    (window as any).ga('send', 'pageview');
  }

  trackEvent(name: string, properties?: EventProperties) {
    (window as any).ga('send', 'event');
  }

  trackError(error: Error, properties?: ErrorProperties) {
    (window as any).ga('send', 'event');
  }

  trackLog(message: string, properties?: LogProperties) {
    (window as any).ga('send', 'event');
  }
}
