import App from './app.js';

const app = App.getInstance();

const COMPONENT_NAME = 'page';

export default class Page {

  constructor() {
  }

  static load() {
    app.value('$routerRootComponent', COMPONENT_NAME);

    app.component('word', {
      template: '<h1>Hello World!!</h1>'
    });

    app.component('clr', {
      template: ''
    });
    
    app.component(COMPONENT_NAME, {
      template: '<a ng-link="[\'ClickHello\']">Click</a> ' +
          '<a ng-link="[\'ClickClear\']">Clear</a><ng-outlet></ng-outlet>',
      $routeConfig: [{
        path: '/hi',
        name: 'ClickHello',
        component: 'word'
      }, {
        path: 'cl',
        name: 'ClickClear',
        component: 'clr'
      }]
    });

  }

}