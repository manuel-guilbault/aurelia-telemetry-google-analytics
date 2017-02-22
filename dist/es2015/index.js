export * from './configurator';
export * from './telemetry-client';
import { TelemetryClient } from 'aurelia-telemetry';
import { Configurator } from './configurator';
import { GoogleAnalyticsTelemetryClient } from './telemetry-client';
export function configure(aurelia, config) {
    if (config) {
        var configurator = new Configurator();
        config(configurator);
    }
    aurelia.singleton(TelemetryClient, GoogleAnalyticsTelemetryClient);
}
