export class Configurator {

  get ga() {
    return (window as any).ga;
  }

  private createGa() {
    const ga: any = function() {
      (ga.q = ga.q || []).push(arguments);
    };
    ga.l = new Date().getTime();
    return ga;
  }

  loadApi() {
    (window as any)['GoogleAnalyticsObject'] = 'ga';
    (window as any).ga = this.createGa();

    const script: HTMLScriptElement = document.createElement('script');
    script.async = true;
    script.src = 'https://www.google-analytics.com/analytics.js';
    
    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(script, firstScript);
  }
}
