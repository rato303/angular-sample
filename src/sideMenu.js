import {MENUS} from './menus';

import App from './app';

import MenuItem from './menuItem';

import Template from './side-menu';

const app = App.getInstance();

const COMPONENT_NAME = 'sideMenu';

class SideMenuController {

  constructor() {
    this.menus = MENUS;
  }

}

export default class SideMenu {

  constructor() {
  }

  static load() {

    MenuItem.load();
    
    app.component(COMPONENT_NAME, {
      template: Template,
      controller: SideMenuController
    });

  }

}
