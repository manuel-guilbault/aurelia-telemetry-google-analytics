export * from './configurator';
export * from './telemetry-client';

import {FrameworkConfiguration} from 'aurelia-framework';
import {TelemetryClient} from 'aurelia-telemetry';

import {Configurator} from './configurator';
import {GoogleAnalyticsTelemetryClient} from './telemetry-client';

export function configure(aurelia: FrameworkConfiguration, config?: ((c: Configurator) => void)) {
  if (config) {
    const configurator = new Configurator();
    config(configurator);
  }

  aurelia.singleton(TelemetryClient, GoogleAnalyticsTelemetryClient);
}
