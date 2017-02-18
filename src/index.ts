export * from './telemetry-client';

import {FrameworkConfiguration} from 'aurelia-framework';
import {TelemetryClient} from 'aurelia-telemetry';

import {GoogleAnalyticsTelemetryClient} from './telemetry-client';

function loadGaApi(propertyId: string) {
  const scope = window as any;

  scope['GoogleAnalyticsObject'] = 'ga';
  scope.ga = scope.ga || function() {
    (scope.ga.q = scope.ga.q || []).push(arguments);
  };
  scope.ga.l = new Date().getTime();

  const script: HTMLScriptElement = document.createElement('script');
  script.async = true;
  script.src = 'https://www.google-analytics.com/analytics.js';
  
  const firstScript = document.getElementsByTagName('script')[0];
  firstScript.parentNode.insertBefore(script, firstScript);

  scope.ga('create', propertyId, 'auto');
}

export function configure(aurelia: FrameworkConfiguration, config?: any) {
  loadGaApi(config.propertyId);
  aurelia.singleton(TelemetryClient, GoogleAnalyticsTelemetryClient);
}
