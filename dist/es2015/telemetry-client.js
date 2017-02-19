var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { logLevel } from 'aurelia-logging';
import { TelemetryClient } from 'aurelia-telemetry';
var levelMap = new Map();
levelMap.set(logLevel.debug, 'debug');
levelMap.set(logLevel.info, 'info');
levelMap.set(logLevel.warn, 'warn');
levelMap.set(logLevel.error, 'error');
var GoogleAnalyticsTelemetryClient = (function (_super) {
    __extends(GoogleAnalyticsTelemetryClient, _super);
    function GoogleAnalyticsTelemetryClient() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ga = window.ga;
        return _this;
    }
    GoogleAnalyticsTelemetryClient.prototype.trackPageView = function (path) {
        this.ga('set', { page: path });
        this.ga('send', 'pageview');
    };
    GoogleAnalyticsTelemetryClient.prototype.trackEvent = function (name, properties) {
        this.ga('send', 'event', Object.assign({
            eventCategory: 'event',
            eventAction: name,
        }, properties));
    };
    GoogleAnalyticsTelemetryClient.prototype.trackError = function (error) {
        this.ga('send', 'exception', {
            exDescription: error.message,
        });
    };
    GoogleAnalyticsTelemetryClient.prototype.trackLog = function (message, level) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        this.ga('send', 'event', {
            eventCategory: 'log',
            eventAction: levelMap.get(level),
            eventLabel: message,
        });
    };
    return GoogleAnalyticsTelemetryClient;
}(TelemetryClient));
export { GoogleAnalyticsTelemetryClient };
