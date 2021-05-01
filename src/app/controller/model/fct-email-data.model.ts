import {DimCountry} from './dim-country.model';
import {DimCategorie} from './dim-categorie.model';
import {DimUser} from './dim-user.model';
import {DimEmailState} from './dim-email-state.model';

export class FctEmailData {
  public email_id: number;
  public email: string;
  public ct_id: DimCountry;
  public cat_id: DimCategorie;
  public state_id: DimEmailState;
  public user_id: DimUser;

  constructor() {
    this.email = '';
    this.ct_id = new DimCountry();
    this.cat_id = new DimCategorie();
    this.state_id = new DimEmailState();
    this.user_id = new DimUser();
  }
}
