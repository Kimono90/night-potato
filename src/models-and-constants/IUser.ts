import type firebase from 'firebase';

export interface IUser {
  user: firebase.UserInfo;
  createdRecipeIds: number[];
}
