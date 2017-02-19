export * from './telemetry-client';
import { TelemetryClient } from 'aurelia-telemetry';
import { GoogleAnalyticsTelemetryClient } from './telemetry-client';
function loadGaApi(propertyId, properties) {
    var scope = window;
    scope['GoogleAnalyticsObject'] = 'ga';
    scope.ga = scope.ga || function () {
        (scope.ga.q = scope.ga.q || []).push(arguments);
    };
    scope.ga.l = new Date().getTime();
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.google-analytics.com/analytics.js';
    var firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(script, firstScript);
    scope.ga('create', propertyId, properties || 'auto');
}
export function configure(aurelia, config) {
    loadGaApi(config.propertyId, config.properties);
    aurelia.singleton(TelemetryClient, GoogleAnalyticsTelemetryClient);
}
