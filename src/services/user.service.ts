import userViewModel from "../models/viewModels/userViewModel";
import { IHttpResponse } from "angular";
import BACKEND_API from "./config";

export default class UserService {
	constructor(private $http: ng.IHttpService) {}

	public async getUsers(searchText: string): Promise<userViewModel[]> {
		const pagination: IHttpResponse<userViewModel[]> = await this.$http.get(BACKEND_API + "/users?q=" + searchText);

		return pagination.data;
	}

	public static $inject = ["$http"];
}
