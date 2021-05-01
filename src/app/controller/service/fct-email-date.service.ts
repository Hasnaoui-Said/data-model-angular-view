import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FctEmailData} from '../model/fct-email-data.model';
import {DimUser} from '../model/dim-user.model';

@Injectable({
  providedIn: 'root'
})
export class FctEmailDateService {
  private _emailData: FctEmailData;
  private _emailDatas: Array<FctEmailData>;

  private url = 'http://localhost:8036//news-lettre-app';

  constructor(private http: HttpClient) {
  }
  public findAll() {
    this.http.get<Array<FctEmailData>>(this.url + '/fct-email-data/').subscribe(
      data => {
        this.emailDatas = data;
      }, error => {
        alert('error lors du loading Data e-mail');
      }
    );
  }
  public save() {
    console.log(this.emailData);
    console.log('bonjour');
    this.http.post<number>(this.url + '/fct-email-data/', this.emailData).subscribe(
      data => {
        if (data > 0) {
          this.emailDatas.push(this.clone(this.emailData));
        }
      }, error => {
        alert('error lors du loading users');
      }
    );
  }

  private clone(emailData: FctEmailData) {
    const cloneEmail = new FctEmailData();
    cloneEmail.email = emailData.email;
    cloneEmail.cat_id.name = emailData.cat_id.name;
    cloneEmail.ct_id.reference = emailData.ct_id.reference;
    cloneEmail.state_id.name = emailData.state_id.name;
    cloneEmail.user_id.reference = emailData.user_id.reference;
    return cloneEmail;
  }

  get emailData(): FctEmailData {
    if (this._emailData == null){
      this._emailData = new FctEmailData();
    }
    return this._emailData;
  }

  set emailData(value: FctEmailData) {
    this._emailData = value;
  }

  get emailDatas(): Array<FctEmailData> {
    if (this._emailDatas == null){
      this._emailDatas = new Array<FctEmailData>();
    }
    return this._emailDatas;
  }

  set emailDatas(value: Array<FctEmailData>) {
    this._emailDatas = value;
  }


}
