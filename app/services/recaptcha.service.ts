import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root",
})

export class RecaptchaService {
  private siteKey: string = '';

  public executeRecaptcha(): Promise<string> {
    return new Promise((resolve, reject) => {
      const grecaptcha = (window as any).grecaptcha;
      grecaptcha.ready(() => {
        grecaptcha.execute(this.siteKey, {action: 'submit'}).then(
          (token: string) => resolve(token),
          (error: Error) => {
            reject(error);
          }
        );
      })
    })
  }
}
