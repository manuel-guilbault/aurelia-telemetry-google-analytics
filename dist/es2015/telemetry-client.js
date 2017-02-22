var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { logLevel } from 'aurelia-logging';
import { TelemetryClient } from 'aurelia-telemetry';
var GoogleAnalyticsTelemetryClient = (function (_super) {
    __extends(GoogleAnalyticsTelemetryClient, _super);
    function GoogleAnalyticsTelemetryClient() {
        var _this = _super.call(this) || this;
        _this.levelMap = new Map();
        _this.levelMap.set(logLevel.debug, 'debug');
        _this.levelMap.set(logLevel.info, 'info');
        _this.levelMap.set(logLevel.warn, 'warn');
        _this.levelMap.set(logLevel.error, 'error');
        return _this;
    }
    GoogleAnalyticsTelemetryClient.prototype.mapToEventAction = function (logLevel) {
        return this.levelMap.get(logLevel) || 'default';
    };
    GoogleAnalyticsTelemetryClient.prototype.trackPageView = function (path) {
        ga('set', { page: path });
        ga('send', 'pageview');
    };
    GoogleAnalyticsTelemetryClient.prototype.trackEvent = function (name, properties) {
        ga('send', 'event', Object.assign({
            eventCategory: 'event',
            eventAction: name,
        }, properties));
    };
    GoogleAnalyticsTelemetryClient.prototype.trackError = function (error) {
        ga('send', 'exception', {
            exDescription: error.name + ": " + error.message,
        });
    };
    GoogleAnalyticsTelemetryClient.prototype.trackLog = function (message, level) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        ga('send', 'event', {
            eventCategory: 'log',
            eventAction: this.mapToEventAction(level),
            eventLabel: message,
        });
    };
    return GoogleAnalyticsTelemetryClient;
}(TelemetryClient));
export { GoogleAnalyticsTelemetryClient };
