import {PasswordRequest} from "../models/passwordRequest";
import {PasswordResponse} from "../models/passwordResponse";

const generatePassword = (options: PasswordRequest): PasswordResponse => {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*-_=+<>?;:[]{}(),./|';

    // Default the options that weren't specified by the caller
    options.length = options.length === 0 || null || undefined ? 12 : options.length;
    options.useLowercase = options.useLowercase === null || undefined ? true : options.useLowercase;
    options.useUppercase = options.useUppercase === null || undefined ? true : options.useUppercase;
    options.useSpecial = options.useSpecial === null || undefined ? true : options.useSpecial;
    options.useNumbers = options.useNumbers === null || undefined? true : options.useNumbers;

    let characters = '';

    if (options.useLowercase) characters += lowercase;
    if (options.useUppercase) characters += uppercase;
    if (options.useNumbers) characters += numbers;
    if (options.useSpecial) characters += specialCharacters;

    let password = '';

    // Clamp the length to 12 if the caller passed a length less than 6 or greater than 64
    options.length = options.length < 6 || options.length > 64 ? 12 : options.length;

    for (let i = 0; i < options.length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters.charAt(randomIndex);
    }

    return { "password": password };
};

export default generatePassword;