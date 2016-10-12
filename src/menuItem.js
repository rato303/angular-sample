import App from './app';

import Template from './menu-item';

const app = App.getInstance();

const COMPONENT_NAME = 'menuItem';

class MenuItemController {
  constructor() {
  }
}

export default class MenuItem {

  constructor() {
  }

  static load() {

    app.component(COMPONENT_NAME, {
      template: Template,
      controller: MenuItemController,
      transclude: true,
      bindings: {
        menu: '<'
      }
    });

  }

}
