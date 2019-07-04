import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthService } from '../service/auth.service';
import { Observable } from 'rxjs';
import * as actionLogin from './auth.actions';
import { map, switchMap } from 'rxjs/operators';
import { AuthLoginInfo } from '../models/login-info';

@Injectable({
  providedIn: 'root'
})
export class LogInEffect {
  constructor(
    private actions$: Actions,
    private authApiClient: AuthService,
    private loginInfo : AuthLoginInfo
  ) { }

  @Effect()
  LogIn: Observable<any> = this.actions$.pipe(
    ofType(actionLogin.AuthActionTypes.LOGIN),
    map((action: actionLogin.logIn) => action.payload),
    switchMap(payload => {
      return this.authApiClient.attemptAuth(this.loginInfo),
      map((user)=>{
        return new actionLogin.logInSuccess({user})
      })
    }),

  )
}
