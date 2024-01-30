### Introduction
Since the Angular team will no longer publish any new releases for the Angular [Flex Layout](https://github.com/angular/flex-layout) API, this project is built using the [AngularJS](https://angular.io/) framework, simply a literal directive to make all flex layout options available.

Please see [this article](https://medium.com/@caerus.karu/farewell-flex-layout-aaa567023769) for the explanation regarding the official Flex Layout API.

Please make sure you have created a new Angular project before utilizing the directive. If not, you can check out the official [Angular CLI](https://angular.io/cli) documentation to create a new project and start using this directive.

---

### Getting Started
First you'll need to import the Layout module in your app's module (or where you want the flex directive).

**Note:** Simply copy the **flex-layout** folder to your protect's root or `src/app` directory.

**app.module.ts**

```ts

import { FlexLayoutModule } from './flex-layout/flex-layout';
...

@NgModule({
    ...
    imports: [ FlexLayoutModule ],
    ...
});
```

After that is configured, you can use the Angular Layout attributes in your HTML tags for flex layout:
```html
<div fxLayout="row" fxLayoutAlign="space-between">
</div>
```

Check out [all of the available options](https://github.com/sangay-cortez/ng-flex-directive/wiki/API-Overview) for using Angular Layout in your application.

---

### Demos

*  [Explore Examples Online](https://tburleson-layouts-demos.firebaseapp.com/)
