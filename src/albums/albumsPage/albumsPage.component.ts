export class albumsPageController {
  constructor(private $scope: ng.IScope) {}
}

export default {
  controllerAs: 'vm',
  template: require('./albumsPage.template.html'),
  controller: ['$scope', albumsPageController]
};
