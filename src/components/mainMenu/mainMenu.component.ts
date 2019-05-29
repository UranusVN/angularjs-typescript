import _ from "lodash";
import { Transition } from "@uirouter/angularjs";

interface MenuItem {
	name: string;
	title: string;
	href: string;
	icon: string;
	isActive: boolean;
}

export class mainMenuController implements ng.IController {
	menuItems: MenuItem[] = [
		{
			name: "home",
			title: "Home",
			href: "#",
			icon: "icon-apps",
			isActive: false
		},
		{
			name: "albums",
			title: "Albums",
			href: "/#!/albums",
			icon: "icon-photo",
			isActive: false
		},
		{
			name: "posts",
			title: "Posts",
			href: "#",
			icon: "icon-message",
			isActive: false
		},
		{
			name: "user",
			title: "User",
			href: "/#!/user",
			icon: "icon-person",
			isActive: false
		}
		// {
		//   name: 'settings',
		//   title: 'Settings',
		//   href: '#',
		//   icon: 'icon-more-vert',
		//   isActive: false
		// }
	];

	constructor(private $transitions: Transition) {}

	$onInit() {
		this.$transitions.onSuccess({}, transition => {
			const to = transition.to().name;
			const item = _.forEach(this.menuItems, item => {
				if (item.name === to) {
					item.isActive = true;
				} else {
					item.isActive = false;
				}
			});
		});
	}
}

export default {
	controllerAs: "vm",
	bindings: {},
	template: require("./mainMenu.template.html"),
	controller: ["$transitions", mainMenuController]
};

let passcode = "secret passcode";

class Employee {
	// private members
	private employeeSalary = 0;

	// protected members

	// public members
	public fullName = "";

	// getters/setters
	get salary(): number {
		return this.employeeSalary;
	}

	set salary(newSalary: number) {
		if (passcode && passcode == "secret passcode") {
			this.employeeSalary = newSalary;
		} else {
			console.log("Error: Unauthorized update of employee!");
		}
	}

	// constructor
	constructor(fullName: string) {
		this.fullName = fullName;
	}

	// public methods

	// protected methods

	// private methods

	// static methods
}
