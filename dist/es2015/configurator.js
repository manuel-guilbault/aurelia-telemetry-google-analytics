var Configurator = (function () {
    function Configurator() {
    }
    Configurator.prototype.loadApi = function () {
        Object.assign(window, {
            GoogleAnalyticsObject: 'ga',
            ga: this.createGa()
        });
        this.loadScript('https://www.google-analytics.com/analytics.js', { async: true });
    };
    Configurator.prototype.createGa = function () {
        var ga = function () {
            ga.q.push(arguments);
        };
        ga.q = [];
        ga.l = new Date().getTime();
        return ga;
    };
    Configurator.prototype.loadScript = function (url, properties) {
        if (properties === void 0) { properties = { async: false }; }
        var script = document.createElement('script');
        script.async = properties.async;
        script.src = url;
        var firstScript = document.getElementsByTagName('script')[0];
        firstScript.parentNode.insertBefore(script, firstScript);
    };
    return Configurator;
}());
export { Configurator };
