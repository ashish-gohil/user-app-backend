import { z } from "zod";
import { Request, Response, NextFunction } from "express";

const userData = z.object({
  name: z.string(),
  age: z.number(),
  email: z.string().email(),
});

export default function payloadValidator(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const body = req.body;
  console.log(body);

  const result = userData.safeParse(body);
  console.log(result);
  if (!result.success) {
    // return due to invalid payload
    res.status(400).json({ message: result.error, error: true });
  } else {
    next();
  }
}
