import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { UserModel } from "./db";
import { JWT_PASSWORD } from "./config";
import { userMiddleware } from "./middleware";
import { ContentModel } from "./db";

const app = express();
app.use(express.json());

app.listen(3000);


app.post("/api/v1/signup", async(req, res) => {
  //Zod validation, // hash the password 
  const username = req.body.username;
  const password = req.body.password;

  try{
  await UserModel.create({
    username: username, 
    password: password
  })
  res.json({
    message: "user sign up success"
  })}catch(e){
    res.status(411).json({
      message: "user already exists"
    })
  }
})

app.post("/api/v1/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const existingUser = await UserModel.findOne({username, password})
  if(existingUser){
    const token = jwt.sign({
      id: existingUser._id
    }, JWT_PASSWORD)

    res.json({
      token
    })
  }else{
    res.status(403).json({
      message: "Incorrect credentials"
    })
  }
})

app.post("/api/v1/content", userMiddleware, async (req, res) => {
  const link = req.body.link;
  const type = req.body.type;
  await ContentModel.create({
    link,
    type, 
    // @ts-ignore
    userId: req.userId,
    tags: []
  })
  res.json({
    message: "content added"
  })
})

app.get("/api/v1/content",userMiddleware, async (req, res) => {
  // @ts-ignore
  const userId = req.userId;
  const content = await ContentModel.find({userId : userId})
  .populate("userId", "username")
  res.json({
    content
  })
})

app.delete("/api/v1/content", userMiddleware, async (req, res) => {
  const contentId = req.body.contentId;

  await ContentModel.deleteMany({
    contentId,
    // @ts-ignore
    userId: req.userId
  })
  res.json({
    message: "Delete"
  })

})

app.post("/api/v1/brain/share", (req, res) => {

})

app.get("/api/v1/brain/:shareLink", (req, res) => {

})