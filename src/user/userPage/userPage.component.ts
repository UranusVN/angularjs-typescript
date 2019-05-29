import userService from '../../services/user.service';
import userViewModel from '../../models/viewModels/userViewModel';

export class userPageController {
  public users: userViewModel[] = [];

  constructor(private $scope: ng.IScope, private userService: userService) {}

  public async $onInit() {
    this.search('');
  }

  public async onSearch(searchText: string) {
    this.search(searchText);
  }

  public async search(searchText: string) {
    this.users = await this.userService.getUsers(searchText);
    this.$scope.$apply();
  }
}

export default {
  controllerAs: 'vm',
  template: require('./userPage.template.html'),
  controller: ['$scope', 'userService', userPageController]
};
