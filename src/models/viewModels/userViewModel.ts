import addressViewModel from './addressViewModel';
import companyViewModel from './companyViewModel';

export default class userDataModel {
  public id!: number;
  public name!: string;
  public username!: string;
  public email!: string;
  public phone!: string;
  public website!: string;
  public address!: addressViewModel;
  public company!: companyViewModel;

  constructor() {}
}
