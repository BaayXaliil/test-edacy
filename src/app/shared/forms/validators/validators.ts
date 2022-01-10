import { AbstractControl, FormGroup } from '@angular/forms'

export function phoneNumberValidator(
    control: AbstractControl
): { [key: string]: any } | null {
    const valid = /^7[7860]{1}[0-9]{7}$/.test(control.value)
    return valid
        ? null
        : { invalidNumber: { valid: false, value: control.value } }
}

export function confirmPasswordValidator(group: FormGroup) {
    const password = group.get('password').value;
    const confirmPassword = group.get('confirmPassword').value;
    return password === confirmPassword ? null : { notSamePasswords: true }
}