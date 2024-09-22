"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const payloadValidator_1 = __importDefault(require("../middleware/payloadValidator"));
const userModel_1 = __importDefault(require("../db/models/userModel"));
const userRouter = (0, express_1.Router)();
userRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield userModel_1.default.find({});
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
}));
userRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let userId = req.params.id;
    const user = yield userModel_1.default.findById({ _id: userId });
    console.log(user);
    res.status(200).json(user);
}));
userRouter.post("/", payloadValidator_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, age } = req.body;
    console.log(req.body);
    const user = yield userModel_1.default.create({
        name,
        age,
        email,
    });
    console.log(user);
    res.status(200).json({
        msg: "User created Successfully!",
        user: { id: user._id },
    });
}));
exports.default = userRouter;
