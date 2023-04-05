import { FormControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {
  public static passwordValidator(
    password: FormControl
  ): ValidationErrors | null {
    if (!password?.value?.match(/\d/)) {
      return { containsNumber: true };
    }

    if (password?.value?.length < 8) {
      return { minLength: true };
    }

    return null;
  }
}
