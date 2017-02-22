"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require("./configurator"));
__export(require("./telemetry-client"));
var aurelia_telemetry_1 = require("aurelia-telemetry");
var configurator_1 = require("./configurator");
var telemetry_client_1 = require("./telemetry-client");
function configure(aurelia, config) {
    if (config) {
        var configurator = new configurator_1.Configurator();
        config(configurator);
    }
    aurelia.singleton(aurelia_telemetry_1.TelemetryClient, telemetry_client_1.GoogleAnalyticsTelemetryClient);
}
exports.configure = configure;
