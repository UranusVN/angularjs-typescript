export class SearchController implements ng.IController {
	// 1. members
	public searchText: string = "";

	public onSearch!: (searchText: {}) => void;

	// 2. constructor
	// ...

	// 3.  $onInit() { ... }

	// 4.  $onChange() { ... }

	// 5.  $onDestroy() { ... }

	// 6. Methods
	search() {
		this.onSearch({ searchText: this.searchText });
	}

	// 7. Injection
}

export default {
	controllerAs: "vm",
	bindings: {
		onSearch: "&"
	},
	template: require("./search.template.html"),
	controller: SearchController
};
