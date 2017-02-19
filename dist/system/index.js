System.register(["./telemetry-client", "aurelia-telemetry"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
        aurelia.singleton(aurelia_telemetry_1.TelemetryClient, telemetry_client_1.GoogleAnalyticsTelemetryClient);
    }
    exports_1("configure", configure);
    var aurelia_telemetry_1, telemetry_client_1;
    var exportedNames_1 = {
        "configure": true
    };
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default" && !exportedNames_1.hasOwnProperty(n)) exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (telemetry_client_2_1) {
                exportStar_1(telemetry_client_2_1);
                telemetry_client_1 = telemetry_client_2_1;
            },
            function (aurelia_telemetry_1_1) {
                aurelia_telemetry_1 = aurelia_telemetry_1_1;
            }
        ],
        execute: function () {
        }
    };
});
