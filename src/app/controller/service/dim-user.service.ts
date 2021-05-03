import {Injectable} from '@angular/core';
import {DimUser} from '../model/dim-user.model';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DimUserService {

  private _user: DimUser;
  private _userLogin: DimUser;
  private _msg: string;
  private _email: string;
  private _users: Array<DimUser>;

  private url = 'http://localhost:8036//news-lettre-app';

  constructor(private http: HttpClient, private router: Router) {
  }

  public findAll() {
    this.http.get<Array<DimUser>>(this.url + '/dim-user/').subscribe(
      data => {
        this.users = data;
      }, error => {
        alert('error lors du loading users');
      }
    );
  }

  get user(): DimUser {
    if (this._user == null) {
      this._user = new DimUser();
    }
    return this._user;
  }

  set user(value: DimUser) {
    this._user = value;
  }

  get userLogin(): DimUser {
    if (this._userLogin == null) {
      this._userLogin = new DimUser();
    }
    return this._userLogin;
  }

  set userLogin(value: DimUser) {
    this._userLogin = value;
  }

  get msg(): string {
    if (this._msg == null) {
      this._msg = '';
    }
    return this._msg;
  }

  set msg(value: string) {
    this._msg = value;
  }

  get email(): string {
    if (this._email == null) {
      this._email = '';
    }
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get users(): Array<DimUser> {
    if (this._users == null) {
      this._users = new Array<DimUser>();
    }
    return this._users;
  }

  set users(value: Array<DimUser>) {
    this._users = value;
  }

  // @ts-ignore
  public loginUser(user: DimUser) {
    this.http.get<DimUser>(this.url + '/dim-user/email/' + this.user.email + '/password/' + this.user.password).subscribe(
      data => {
        if (data != null) {
          this.router.navigate(['/menu']);
          console.log('reponce recieved ' + this.user);
        } else {
          console.log('reponce recieved bad user');
          this.msg = 'Bad credentials, enter an email et password valid';
        }
      },
      error => {
        console.log('execption occured');
      }
    );
  }

  public findByEmailUserLogin() {
    this.http.get<DimUser>(this.url + '/dim-user/email' + this.email).subscribe(
      data => {
       this.userLogin = data;
        console.log(data);
      }, error => {
        console.log('error lors du loading users');
      }
    );
  }
}
