import './vendor';
import {APP_NAME} from './appConstants';

const APP_MODULES = [
  'ngComponentRouter'
];

export default class App {

  constructor() {
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = angular.module(
        APP_NAME,
        APP_MODULES
      );
    }
    return this.instance;
  }

}
