export class Configurator {

  loadApi() {
    Object.assign(window, {
      GoogleAnalyticsObject: 'ga',
      ga: this.createGa()
    });

    this.loadScript('https://www.google-analytics.com/analytics.js', { async: true });
  }

  private createGa(): UniversalAnalytics.ga {
    const ga: any = function() {
      ga.q.push(arguments);
    };
    ga.q = [];
    ga.l = new Date().getTime();
    return ga;
  }

  private loadScript(url: string, properties: { async: boolean } = { async: false }) {
    const script: HTMLScriptElement = document.createElement('script');
    script.async = properties.async;
    script.src = url;
    
    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(script, firstScript);
  }
}
