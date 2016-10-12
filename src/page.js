import App from './app';

import SideMenu from './sideMenu';

import wordTemplate from './word';
import clearTemplate from './clear';

import Template from './page.html';

const app = App.getInstance();

const COMPONENT_NAME = 'page';

export default class Page {

  constructor() {
  }

  static load() {
    app.value('$routerRootComponent', COMPONENT_NAME);

    SideMenu.load();

    app.component('word', {
      template: wordTemplate
    });

    app.component('clr', {
      template: ''
    });
    
    app.component(COMPONENT_NAME, {
      //template: '<a class="pure-button" ng-link="[\'ClickHello\']">Click</a> ' +
      //    '<a class="pure-button" ng-link="[\'ClickClear\']">Clear</a><ng-outlet></ng-outlet>',
      template: Template,
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
