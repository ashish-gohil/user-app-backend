import User from "./models/userModel";

export const seedUsers = async () => {
  // Check if users already exist in the database
  const usersCount = await User.countDocuments();

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
      await User.insertMany(seedData);
      console.log("User data seeded successfully");
    } catch (error) {
      console.error("Error seeding user data:", error);
    }
  } else {
    console.log("Users already exist, skipping seed.");
  }
};
