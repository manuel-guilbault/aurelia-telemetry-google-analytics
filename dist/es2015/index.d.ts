export * from './configurator';
export * from './telemetry-client';
import { FrameworkConfiguration } from 'aurelia-framework';
import { Configurator } from './configurator';
export declare function configure(aurelia: FrameworkConfiguration, config?: ((c: Configurator) => void)): void;
