import { User } from "../models/user.model.js";
import { ApiError } from "./ApiError.js";

const generateCode = async (role) => {
  try {
    const prefix = role.charAt(0).toUpperCase();
    const lastUser = await User.findOne({ role })
      .sort({ userCode: -1 })
      .limit(1);

    const nextCode = lastUser ? lastUser.userCode + 1 : 1;

    return `${prefix}${nextCode.toString().padStart(4, "0")}`;
  } catch (error) {
    throw new ApiError(500, "Something went wrong while generating code");
  }
};

export { generateCode };