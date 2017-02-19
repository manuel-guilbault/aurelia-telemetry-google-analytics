define(["require", "exports", "./telemetry-client", "aurelia-telemetry", "./telemetry-client"], function (require, exports, telemetry_client_1, aurelia_telemetry_1, telemetry_client_2) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    __export(telemetry_client_1);
    function loadGaApi(propertyId, properties) {
        var scope = window;
        scope['GoogleAnalyticsObject'] = 'ga';
        scope.ga = scope.ga || function () {
            (scope.ga.q = scope.ga.q || []).push(arguments);
        };
        scope.ga.l = new Date().getTime();
        var script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.google-analytics.com/analytics.js';
        var firstScript = document.getElementsByTagName('script')[0];
        firstScript.parentNode.insertBefore(script, firstScript);
        scope.ga('create', propertyId, properties || 'auto');
    }
    function configure(aurelia, config) {
        loadGaApi(config.propertyId, config.properties);
        aurelia.singleton(aurelia_telemetry_1.TelemetryClient, telemetry_client_2.GoogleAnalyticsTelemetryClient);
    }
    exports.configure = configure;
});
