import { auth } from "@clerk/nextjs";
import { db } from "./db";
import { MAX_FREE_COUNT } from "@/constants";
export const increaseApiLimit = async () => {
  const { userId } = auth();
  if (!userId) {
    return null;
  }
  const userApiLimit = await db.userApiLimit.findUnique({
    where: { userId: userId },
  });
  if (userApiLimit) {
    await db.userApiLimit.update({
      where: {
        userId: userId,
      },
      data: { count: userApiLimit.count + 1 },
    });
  } else {
    await db.userApiLimit.create({
      data: { userId: userId, count: 1 },
    });
  }
};
export const checkApiLimit = async () => {
  const { userId } = auth();
  if (!userId) {
    return false;
  }
  const userApiLimit = await db.userApiLimit.findUnique({
    where: {
      userId,
    },
  });
  if (!userApiLimit || userApiLimit.count < MAX_FREE_COUNT) {
    return true;
  } else {
    return false;
  }
};
export const getApiLimitCount = async () => {
  const { userId } = auth();
  if (!userId) {
    return 0;
  }
  const userApiLimit = await db.userApiLimit.findUnique({
    where: {
      userId,
    },
  });
  if (!userApiLimit) {
    return 0;
  }
  return userApiLimit.count;
};
