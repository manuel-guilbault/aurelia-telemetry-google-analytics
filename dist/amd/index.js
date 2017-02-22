define(["require", "exports", "./configurator", "./telemetry-client", "aurelia-telemetry", "./configurator", "./telemetry-client"], function (require, exports, configurator_1, telemetry_client_1, aurelia_telemetry_1, configurator_2, telemetry_client_2) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    __export(configurator_1);
    __export(telemetry_client_1);
    function configure(aurelia, config) {
        if (config) {
            var configurator = new configurator_2.Configurator();
            config(configurator);
        }
        aurelia.singleton(aurelia_telemetry_1.TelemetryClient, telemetry_client_2.GoogleAnalyticsTelemetryClient);
    }
    exports.configure = configure;
});
