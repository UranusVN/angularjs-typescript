import angular from 'angular';
import breadcrumb from './breadcrumb/breadcrumb.component';
import search from './search/search.component';
import mainMenu from './mainMenu/mainMenu.component';
import headerNav from './headerNav/headerNav.component';

angular
  .module('components', [])
  .component('breadcrumb', breadcrumb)
  .component('search', search)
  .component('mainMenu', mainMenu)
  .component('headerNav', headerNav);
