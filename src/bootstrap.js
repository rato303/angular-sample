import './vendor';
import App from './app';
import AppConfig from './appConfig';
import Page from './page';

const app = App.getInstance();

angular.element(document).ready(() => {

  AppConfig.load();

  Page.load();

  angular.bootstrap(document, [app.name], {});
  
});
