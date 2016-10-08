import App from './app.js';

const app = App.getInstance();

export default class AppConfig {

  constructor() {
  }

  static load() {
    app.config(['$locationProvider', ($locationProvider) => {
      $locationProvider.html5Mode(true);
    }]);
  }

}
