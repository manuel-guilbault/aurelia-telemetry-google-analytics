import { TelemetryClient } from 'aurelia-telemetry';
export declare class GoogleAnalyticsTelemetryClient extends TelemetryClient {
    private ga;
    trackPageView(path: string): void;
    trackEvent(name: string, properties?: {
        [key: string]: any;
    }): void;
    trackError(error: Error): void;
    trackLog(message: string, level: number, ...args: any[]): void;
}
