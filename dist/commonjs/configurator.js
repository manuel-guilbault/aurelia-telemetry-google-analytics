"use strict";
var Configurator = (function () {
    function Configurator() {
    }
    Object.defineProperty(Configurator.prototype, "ga", {
        get: function () {
            return window.ga;
        },
        enumerable: true,
        configurable: true
    });
    Configurator.prototype.createGa = function () {
        var ga = function () {
            (ga.q = ga.q || []).push(arguments);
        };
        ga.l = new Date().getTime();
        return ga;
    };
    Configurator.prototype.loadApi = function () {
        window['GoogleAnalyticsObject'] = 'ga';
        window.ga = this.createGa();
        var script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.google-analytics.com/analytics.js';
        var firstScript = document.getElementsByTagName('script')[0];
        firstScript.parentNode.insertBefore(script, firstScript);
    };
    return Configurator;
}());
exports.Configurator = Configurator;
