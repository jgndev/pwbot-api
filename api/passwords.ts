import type { VercelRequest, VercelResponse } from '@vercel/node';
import {PasswordRequest} from "./models/passwordRequest";
import {PasswordResponse} from "./models/passwordResponse";
import generatePassword from "./services/passwordService";

export default (request: VercelRequest, response: VercelResponse): void => {
    const options: PasswordRequest = request.body;
    const password:PasswordResponse = generatePassword(options);

    response.json(password)
}