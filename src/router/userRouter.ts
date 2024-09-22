import { Request, Router, Response } from "express";
import payloadValidator from "../middleware/payloadValidator";
import User from "../db/models/userModel";

const userRouter = Router();

userRouter.get("/", async (req: Request, res: Response) => {
  const users = await User.find({});
  //   const users = [
  //     {
  //       id: 1,
  //       name: "TestF1 TestL1",
  //       email: "test1@example.com",
  //       address: "Test Address 1",
  //       age: 20,
  //     },
  //     {
  //       id: 2,
  //       name: "TestF2 TestL2",
  //       email: "test2@example.com",
  //       address: "Test Address 2",
  //       age: 34,
  //     },
  //   ];

  console.log(users);
  const mappedUsers = users.map((usr, idx) => ({
    name: usr.name,
    email: usr.email,
    age: usr.age,
    id: usr._id,
  }));

  res.status(200).json(mappedUsers);
  return;
});

userRouter.get("/:id", async (req: Request, res: Response) => {
  let userId = req.params.id;
  const user = await User.findById({ _id: userId });
  console.log(user);
  res.status(200).json(user);
});

userRouter.post("/", payloadValidator, async (req: Request, res: Response) => {
  const { name, email, age } = req.body;
  console.log(req.body);
  const user = await User.create({
    name,
    age,
    email,
  });
  console.log(user);
  res.status(200).json({
    msg: "User created Successfully!",
    user: { id: user._id },
  });
});

export default userRouter;
