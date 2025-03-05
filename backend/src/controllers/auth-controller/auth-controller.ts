import { Request, Response } from "express";
import User from "../../model/User";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const registerController = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);

  if (!name || !email || !password) {
    console.log("please fill inputs");
    res.status(400).json({ msg: "please fill inputs" });
    return;
  }

  if (password.trim().length < 6) {
    console.log("password shouldn't be less than 6 characters");
    res
      .status(400)
      .json({ msg: "password shouldn't be less than 6 characters" });
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const userData = {
    name: name,
    email: email,
    password: hashedPassword,
    isRegistered: true,
  };

  try {
    const emailExists = await User.findOne({ email });
    if (emailExists) {
      console.log("user already registered");
      res.status(401).json({ msg: "user already registered" });
      return;
    }

    await User.create(userData);
    console.log("registration successful...");
    res.status(200).json({ msg: "registration successful" });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "something went wrong";
    console.log("register error message:", message);
  }

  // res.send("This is the register route.")
};

export const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    console.log("please fill inputs");
    res.status(400).json({ msg: "please fill inputs" });
    return;
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log("user hasn't been registered");
      res.status(404).json({ msg: "user hasn't been registered" });
      return;
    }

    if (!user.isRegistered) {
      console.log("user hasn't been registered");
      res.status(401).json({ msg: "user hasn't been registered" });
      return;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.log("invalid password");
      res.status(401).json({ msg: "invalid password" });
      return;
    }

    console.log("about to iossue jwt token");
    const generateToken = (_id:string, username: string=""):string => {
      const tokenDuration = parseInt(process.env.ExpiresIn || "3600", 10);

      return `Bearer ${jwt.sign({ _id, username }, process.env.SecretKey!, {
        expiresIn: tokenDuration,
      })}`;
    };

    const token = generateToken(user._id.toString(), user.name||"");
    console.log("login token:", token);
    res
      .status(201)
      .json({ msg: "user logged in successfully", token: token, user: user });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "something went wrong";
    console.log("loging error message:", message);
  }

  // res.send("This is the login route.")
};
