import type { VercelRequest, VercelResponse } from '@vercel/node';
import {PasswordRequest} from "./models/passwordRequest";
import {PasswordResponse} from "./models/passwordResponse";
import generatePassword from "./services/passwordService";

// export default function handler(
//     request: VercelRequest,
//     response: VercelResponse,
// ) {
//     response.status(200).json({
//         body: request.body,
//         query: request.query,
//         cookies: request.cookies,
//     });
// }

export default function passwords(request: VercelRequest, response: VercelResponse) {
    const options: PasswordRequest = request.body;
    const password:PasswordResponse = generatePassword(options);

    response.status(200).json({
        body: password
    });
}