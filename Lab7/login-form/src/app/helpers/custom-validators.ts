import { FormControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {
  public static minLength(password: FormControl): ValidationErrors | null {
    if (password?.value?.length < 8) {
      return { minLength: true };
    }
    return null;
  }

  public static containsNumbers(
    password: FormControl
  ): ValidationErrors | null {
    if (!password?.value?.match(/\d/)) {
      return { containsNumber: true };
    }
    return null;
  }
}
