import { Currencies } from './currencies.model';
import { Currenty } from './currenty.model';

export class CurrentyList {
  public total: number;
  public pageSize: number;
  public currencies: Currenty[];
}
