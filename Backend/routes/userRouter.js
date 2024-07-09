const express = require("express");
const zod = require("zod");
const { User } = require("../db");
const { JWT_SECRET } = require("../config");
const authMiddleware = require("../middleware");
const router = express.Router();

//User signup

const signupBody = zod.object({
  username: zod.string().email(),
  firstName: zod.string(),
  lastName: zod.string(),
  password: zod.string().min(6),
});

router.post("/signup", async (req, res) => {
  const { success } = signupBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Email already taken / Invalid inputs",
    });
  }
  const existingUser = await User.findOne({
    username: req.body.username,
  });
  if (existingUser) {
    return res.status(411).json({
      message: "Email already Taken / User already exists",
    });
  }

  const user = User.create({
    username: req.body.username,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });

  const userId = user._id;

  const token = jwt.sign(
    {
      userId,
    },
    JWT_SECRET,
    { expiresIn: "3h" }
  );

  return res.json({
    message: "User created successfully",
    token: token,
  });
});

//User signin

const siginBody = zod.object({
  username: zod.string(),
  password: zod.string().min(6),
});

router.post("/signin", (req, res) => {
  const { success } = siginBody.safeParse(req.body);
  if (!success) {
    return res.json({
      message: "User doesnot exists / Wrong credentials",
    });
  }

  const user = User.findOne({
    username: req.body.username,
    password: req.body.password,
  });

  if (user) {
    const token = jwt.sign(
      {
        userId: user._id,
      },
      JWT_SECRET
    );

    return res.json({
      token: token,
    });
  }

  res.status(411).json({
    message: "Error while logging you in",
  });
});

//forgot password

const updateBody = zod.object({
  password: zod.string().optional(),
  firstName: zod.string().optional(),
  lastName: zod.string().optional(),
});

router.put("/changeDetails", authMiddleware, async (res, res) => {
  const { success } = updateBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Error while updating the information",
    });
  }
  await User.updateOne({ _id: req.userId }, req.body);

  return res.status(211).json({
    message: "User updated successfully",
  });
});

///filter route

router.get("/filter", async (req, res) => {
  const filter = req.query.filter || "";
  const users = await User.find({
    $or: [
      {
        firstName: {
          $regex: filter,
        },
      },
      {
        lastName: {
          $regex: filter,
        },
      },
    ],
  });

  res.json({
    user: users.map((user) => ({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
});

module.exports = router;
