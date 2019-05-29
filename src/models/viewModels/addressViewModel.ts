import geoViewModel from './geoViewModel';

export default class addressViewModel {
  public street!: string;
  public suite!: string;
  public city!: string;
  public zipcode!: string;
  public geo!: geoViewModel;

  constructor() {}
}
