# aurelia-openlayers

A highly configurable custom element for use in your Aurelia applications for
inserting Google Maps into your application.

## WIP - Disclosure
------
This plugin is Work in Progess, defining his archicture and also his implementation. It's not ready to use in live/production enviroments.


## To Install

**Webpack/Aurelia CLI**

``` shell
npm install aurelia-google-maps --save
```

### CLI User?
The Aurelia CLI requires some additional configuration to use this plugin. Open up your `aurelia.json` file located in the `aurelia_project` directory and at the bottom of the `dependencies` section add in the following:

```
{
    "name": "aurelia-openlayers",
    "path": "../node_modules/aurelia-openlayers/dist/amd",
    "main": "aurelia-openlayers"
}
```

**Jspm**

``` shell
jspm install aurelia-openlayers
```

## Configuring For Use

Inside of your `main.js`/`main.ts` file simply load the plugin inside of
the configure method using `.plugin()`

``` typescript
export function configure(aurelia: Aurelia) {
    aurelia.use
        .plugin('aurelia-openlayers', (config: AureliaOpenlayersConfiguration) => {});
}
```

## Using It

Now you have Openlayers configured, to use it simply use the custom
element `<ol-map></ol-map>` in your views.
