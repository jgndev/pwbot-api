import type { VercelRequest, VercelResponse } from '@vercel/node';
import {PasswordRequest} from "./models/passwordRequest";
import {PasswordResponse} from "./models/passwordResponse";
import generatePassword from "./services/passwordService";

const allowCors = fn => async (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS,POST')
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    )
    if (req.method === 'OPTIONS') {
        res.status(200).end()
        return
    }
    return await fn(req, res)
}

const handler = (request: VercelRequest, response: VercelResponse)=> {
    const options: PasswordRequest = request.body;
    const password:PasswordResponse = generatePassword(options);

    response.json(password)
}

module.exports = allowCors(handler);