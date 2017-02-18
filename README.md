# aurelia-telemetry-google-analytics

Gather telemetry data in an Aurelia application with Google Analytics.

*This plugin is intended to be used with the [aurelia-telemetry](https://github.com/manuel-guilbault/aurelia-telemetry) plugin.*

## Configuration

```typescript
export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .plugin('aurelia-telemetry')
    .plugin('aurelia-telemetry-google-analytics', { propertyId: '<YOUR_PROPERTY_ID>' });

  aurelia.start().then(() => aurelia.setRoot());
}
```
