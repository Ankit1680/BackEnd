import asyncHandler from "../utils/asyncHandler.js";

export const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    success: true,
    message: "post request send successfull",
  });
});
