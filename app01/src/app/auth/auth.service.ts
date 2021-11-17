import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject, Subject, throwError } from 'rxjs';
import { User } from './user.model';
import { Router } from '@angular/router';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  user = new Subject<User>();
  /*BehaviorSubject possiamo chiamare next per ottenere un valore e possiamo
  iscriverlo per essere informato su nuovi valori . La differenza con Subject
  è che offre anche agli abbonati l'accesso immediato al valore precedentemente emesso anche se
  non si sono abbonati nel momento in cui quel valore è stato emesso.
  ciò significa che possiamo ottenere l'accesso come utente attualmente attivo
  anche se ci iscriviamo solo dopo che l'utente è stato emesso
  */
  // user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient, private router: Router) {}

  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB7yqauVl8KAexl98vbINJBvcC6FPQWPFk',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.handleError),
        tap((respData) => {
          this.handleAuthentication(
            respData.email,
            respData.localId,
            respData.idToken,
            +respData.expiresIn
          );
        })
      );
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB7yqauVl8KAexl98vbINJBvcC6FPQWPFk',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.handleError),
        tap((respData) => {
          this.handleAuthentication(
            respData.email,
            respData.localId,
            respData.idToken,
            +respData.expiresIn
          );
        })
      );
  }

  private handleError(errorResp: HttpErrorResponse) {
    let errorMessage = ' errore sconosciuto ';
    if (!errorResp.error || !errorResp.error.error) {
      return throwError(errorMessage);
    }
    switch (errorResp.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'Questa email è già registrata';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = ' Questa email non esiste';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = ' La password non è corretta';
        break;
    }
    return throwError(errorMessage);
  }

  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
  }

  logout() {
    this.user.next(undefined);
    this.router.navigate(['/auth']);
  }
}
