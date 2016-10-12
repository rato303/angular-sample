import './vendor';

import App from './app';
import AppConfig from './appConfig';
import Page from './page';

require('./main.css');
require('purecss/build/pure-min.css');

const app = App.getInstance();

angular.element(document).ready(() => {

  AppConfig.load();

  Page.load();

  angular.bootstrap(document, [app.name], {});
  
});
