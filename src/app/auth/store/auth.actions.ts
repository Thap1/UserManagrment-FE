import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGIN_FAIL = '[Auth] Login Failure',
}
export class logIn implements Action{
  readonly type = AuthActionTypes.LOGIN;
  constructor(public payload: any) {}
}
export class logInSuccess implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESS;
  constructor(public payload: any){}
}
export class logInFail implements Action {
  readonly type = AuthActionTypes.LOGIN_FAIL;
  constructor(public payload: any) {}
}

export type ActionsLogin = logIn | logInSuccess | logInSuccess;
