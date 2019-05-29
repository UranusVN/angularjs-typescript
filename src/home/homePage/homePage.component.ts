import BasePageController from '../../components/basePage/basePage.controller';

export class homePageController extends BasePageController {
  public static $inject: string[] = ['$timeout'];

  constructor(private $timeout: ng.ITimeoutService) {
    super();
  }

  public $onInit() {
    this.$timeout(function() {
      console.log('HomePage TimeOut');
    }, 1000);
  }
}

export default {
  controllerAs: 'vm',
  template: require('./homePage.template.html'),
  controller: ['$timeout', homePageController]
};
