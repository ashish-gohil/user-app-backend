"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const userData = zod_1.z.object({
    name: zod_1.z.string(),
    age: zod_1.z.number(),
    email: zod_1.z.string().email(),
});
function payloadValidator(req, res, next) {
    const body = req.body;
    console.log(body);
    const result = userData.safeParse(body);
    console.log(result);
    if (!result.success) {
        // return due to invalid payload
        res.status(400).json({ message: result.error, error: true });
    }
    else {
        next();
    }
}
exports.default = payloadValidator;
