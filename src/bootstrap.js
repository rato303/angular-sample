import './vendor';
import App from './app';
import Page from './page';

const app = App.getInstance();

angular.element(document).ready(() => {

  Page.load();

  angular.bootstrap(document, [app.name], {});
  
});
