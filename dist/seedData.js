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
exports.seedUsers = void 0;
const userModel_1 = __importDefault(require("./models/userModel")); // Import your User model
const seedUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    // Check if users already exist in the database
    const usersCount = yield userModel_1.default.countDocuments();
    if (usersCount === 0) {
        console.log("Seeding user data...");
        const seedData = [
            {
                name: "TestF1 TestL1",
                email: "test1@example.com",
                address: "Test Address 1",
                age: 20,
            },
            {
                name: "TestF2 TestL2",
                email: "test2@example.com",
                address: "Test Address 2",
                age: 34,
            },
        ];
        try {
            // Insert seed data
            yield userModel_1.default.insertMany(seedData);
            console.log("User data seeded successfully");
        }
        catch (error) {
            console.error("Error seeding user data:", error);
        }
    }
    else {
        console.log("Users already exist, skipping seed.");
    }
});
exports.seedUsers = seedUsers;
