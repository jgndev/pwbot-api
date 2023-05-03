import {PasswordRequest} from "../models/passwordRequest";
import {PasswordResponse} from "../models/passwordResponse";

const generatePassword = (options: PasswordRequest): PasswordResponse => {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const special = '!@#$%^&*-_=+<>?;:[]{}(),./|';

    let characters = '';

    if (options.useLowercase) characters += lowercase;
    if (options.useUppercase) characters += uppercase;
    if (options.useNumbers) characters += numbers;
    if (options.useSpecial) characters += special;

    let password = '';

    // Clamp to between 6 and 64 characters for a generated password.
    // Less than 6 characters is not a great password
    // More than 64 characters would be a bit wild to handle in a UI
    options.length = options.length < 6 ? 6 : options.length;
    options.length = options.length > 64 ? 64 : options.length;

    for (let i = 0; i < options.length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters.charAt(randomIndex);
    }

    return { "password": password };
};

export default generatePassword;