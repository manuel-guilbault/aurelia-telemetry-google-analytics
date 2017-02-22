System.register(["aurelia-logging", "aurelia-telemetry"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_logging_1, aurelia_telemetry_1, GoogleAnalyticsTelemetryClient;
    return {
        setters: [
            function (aurelia_logging_1_1) {
                aurelia_logging_1 = aurelia_logging_1_1;
            },
            function (aurelia_telemetry_1_1) {
                aurelia_telemetry_1 = aurelia_telemetry_1_1;
            }
        ],
        execute: function () {
            GoogleAnalyticsTelemetryClient = (function (_super) {
                __extends(GoogleAnalyticsTelemetryClient, _super);
                function GoogleAnalyticsTelemetryClient() {
                    var _this = _super.call(this) || this;
                    _this.ga = window.ga;
                    _this.levelMap = new Map();
                    _this.levelMap.set(aurelia_logging_1.logLevel.debug, 'debug');
                    _this.levelMap.set(aurelia_logging_1.logLevel.info, 'info');
                    _this.levelMap.set(aurelia_logging_1.logLevel.warn, 'warn');
                    _this.levelMap.set(aurelia_logging_1.logLevel.error, 'error');
                    return _this;
                }
                GoogleAnalyticsTelemetryClient.prototype.mapToEventAction = function (logLevel) {
                    return this.levelMap.get(logLevel) || 'default';
                };
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
                        eventAction: this.mapToEventAction(level),
                        eventLabel: message,
                    });
                };
                return GoogleAnalyticsTelemetryClient;
            }(aurelia_telemetry_1.TelemetryClient));
            exports_1("GoogleAnalyticsTelemetryClient", GoogleAnalyticsTelemetryClient);
        }
    };
});
