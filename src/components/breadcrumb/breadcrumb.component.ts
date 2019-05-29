export class breadcrumbController implements ng.IController {
  private items: string[] = [];

  constructor() {}

  $onInit() {
    if (this.items.length === 0) {
      this.items.push('Home');
    }
  }
}

export default {
  controllerAs: 'vm',
  binding: {
    items: '<?'
  },
  template: require('./breadcrumb.template.html'),
  controller: [breadcrumbController]
};
