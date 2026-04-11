// File: API/utils/getUserDataFromToken.js
import jwt from "jsonwebtoken";
const jwtSecret = "efesfewfewfesfeserfrrfe";

export function getUserDataFromToken(req) {
    return new Promise((resolve, reject) => {
        const { token } = req.cookies;
        if (!token) {
            return reject('No token found'); 
        }
        jwt.verify(token, jwtSecret, {}, (err, userData) => {
            if (err) return reject(err);
            resolve(userData);
        });
    });
}