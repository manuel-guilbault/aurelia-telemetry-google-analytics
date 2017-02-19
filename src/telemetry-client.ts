import {TelemetryClient, PageViewProperties, EventProperties, ErrorProperties, LogProperties} from 'aurelia-telemetry';

export class GoogleAnalyticsTelemetryClient extends TelemetryClient {

  private ga: any = (window as any).ga;
  
  trackPageView(properties: PageViewProperties) {
    const otherProperties = Object.assign({}, properties);
    delete otherProperties.title;
    delete otherProperties.path;

    this.ga('set', {
      page: properties.path,
      title: properties.title,
    });
    this.ga('send', 'pageview', otherProperties);
  }

  trackEvent(name: string, properties?: EventProperties) {
    this.ga('send', 'event', Object.assign({
      eventCategory: 'event',
      eventAction: name,
    }, properties));
  }

  trackError(error: Error, properties?: ErrorProperties) {
    this.ga('send', 'exception', Object.assign({
      exDescription: error.message,
    }, properties));
  }

  trackLog(message: string, properties?: LogProperties) {
    const otherProperties = Object.assign({}, properties);
    delete otherProperties.level;

    this.ga('send', 'event', Object.assign({
      eventCategory: 'log',
      eventAction: properties.level || '(not set)',
      eventLabel: message,
    }, otherProperties));
  }
}
