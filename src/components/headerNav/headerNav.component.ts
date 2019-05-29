export class headerNavController implements ng.IController {}

export default {
  controllerAs: 'vm',
  bindings: {},
  template: require('./headerNav.template.html'),
  controller: [headerNavController]
};
