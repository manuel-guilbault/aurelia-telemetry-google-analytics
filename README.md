# aurelia-telemetry-google-analytics

Gather telemetry data in an Aurelia application with Google Analytics.

*This plugin is intended to be used with the [aurelia-telemetry](https://github.com/manuel-guilbault/aurelia-telemetry) plugin.*

## Configuration

```typescript
import {Configurator} from 'aurelia-telemetry-google-analytics';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .plugin('aurelia-telemetry')
    .plugin('aurelia-telemetry-google-analytics', (c: Configurator) => {
      c.loadApi();
      ga('create', '<YOUR_PROPERTY_ID>', 'auto');
    });

  aurelia.start().then(() => aurelia.setRoot());
}
```

The `Configurator` object exposes a `loadApi` method, which loads the Google Analytics API.
If you want to manually load it, you can simply omit this call. The same goes for creating the tracker.
