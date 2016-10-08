import './vendor';
import App from './app';
import Page from './page';

const app = App.getInstance();

angular.element(document).ready(() => {
  angular.bootstrap(document, [app.name], {
  });
  Page.load();
});
