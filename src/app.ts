import angular from 'angular';
import './user/user.module';
import './home/home.module';
import './albums/albums.module';
import './services/services.module';
import './components/components.module';
import '@uirouter/angularjs';
import { StateProvider, UrlRouterProvider } from '@uirouter/angularjs';
import 'spectre.css';
import './styles/styles.scss';
import './styles/icons.css';

angular
  .module('app', ['ui.router', 'components', 'services', 'home', 'user', 'albums'])
  .config(function($stateProvider: StateProvider, $urlRouterProvider: UrlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('home', {
      url: '/',
      component: 'homePageComponent'
    });
    $stateProvider.state('user', {
      url: '/user',
      component: 'userPageComponent'
    });
    $stateProvider.state('albums', {
      url: '/albums',
      component: 'albumsPageComponent'
    });
  });

angular.element(document).ready(function() {
  angular.bootstrap(document, ['app']);
});
