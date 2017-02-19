var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "aurelia-telemetry"], function (require, exports, aurelia_telemetry_1) {
    "use strict";
    var GoogleAnalyticsTelemetryClient = (function (_super) {
        __extends(GoogleAnalyticsTelemetryClient, _super);
        function GoogleAnalyticsTelemetryClient() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.ga = window.ga;
            return _this;
        }
        GoogleAnalyticsTelemetryClient.prototype.trackPageView = function (properties) {
            var otherProperties = Object.assign({}, properties);
            delete otherProperties.title;
            delete otherProperties.path;
            this.ga('set', {
                page: properties.path,
                title: properties.title,
            });
            this.ga('send', 'pageview', otherProperties);
        };
        GoogleAnalyticsTelemetryClient.prototype.trackEvent = function (name, properties) {
            this.ga('send', 'event', Object.assign({
                eventCategory: 'event',
                eventAction: name,
            }, properties));
        };
        GoogleAnalyticsTelemetryClient.prototype.trackError = function (error, properties) {
            this.ga('send', 'exception', Object.assign({
                exDescription: error.message,
            }, properties));
        };
        GoogleAnalyticsTelemetryClient.prototype.trackLog = function (message, properties) {
            var otherProperties = Object.assign({}, properties);
            delete otherProperties.level;
            this.ga('send', 'event', Object.assign({
                eventCategory: 'log',
                eventAction: properties.level || '(not set)',
                eventLabel: message,
            }, otherProperties));
        };
        return GoogleAnalyticsTelemetryClient;
    }(aurelia_telemetry_1.TelemetryClient));
    exports.GoogleAnalyticsTelemetryClient = GoogleAnalyticsTelemetryClient;
});
