const dotenv = require("dotenv");

const { sequelize } = require("./db/index");
const { UserModel } = require("./model/userModel");
const { generateUser } = require("./utils/utils");

dotenv.config();

const USERS_PER_BULK_COUNT = process.env.USERS_PER_BULK_COUNT;
const BULK_COUNT = process.env.BULK_COUNT;

console.log("Config:", { USERS_PER_BULK_COUNT, BULK_COUNT });

const generateBulkUsers = (count) => {
  const users = [];

  for (let i = 0; i < count; i++) {
    users.push(generateUser());
  }

  return users;
};

const bulkUsersCreate = async () => {
  for (let i = 0; i < BULK_COUNT; i++) {
    const startTime = new Date().getTime();
    const users = generateBulkUsers(USERS_PER_BULK_COUNT);
    const endTimeUsers = new Date().getTime();

    console.log(
      `Generated ${USERS_PER_BULK_COUNT} users. Time taken: ${
        endTimeUsers - startTime
      } ms`
    );

    try {
      await UserModel.bulkCreate(users);

      const endTime = new Date().getTime();

      const timeTaken = endTime - startTime;

      console.log(
        `Created ${USERS_PER_BULK_COUNT} users. Current count: ${
          USERS_PER_BULK_COUNT * (i + 1)
        }. Time taken: ${timeTaken / 1000} seconds
          Time taken per user: ${timeTaken / USERS_PER_BULK_COUNT} ms
        `
      );
    } catch (e) {
      console.log("Failed to create bulk users", e);
      break;
    }
  }
};

const bootstrap = async () => {
  try {
    await sequelize.sync();

    console.log("Model synced with database");
  } catch (e) {
    console.log("Failed to sync model with database", e);
  }

  await bulkUsersCreate();

  console.log("Finished creating users");
};

bootstrap();
