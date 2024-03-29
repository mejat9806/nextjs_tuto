import mongoose from "mongoose";

//!this is where we creeate how data in our database will look like
const userSchema = new mongoose.Schema(
  {
    username: {
      type: "String",
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: "String",
      required: true,
      unique: true,
      max: 50,
    },
    password: {
      type: "String",
    },
    img: {
      type: "String",
    },
    isAdmin: { type: "Boolean", default: false },
  },
  { timestamps: true },
);

const postSchema = new mongoose.Schema(
  {
    title: {
      type: "String",
      required: true,
      max: 50,
    },
    desc: {
      type: "String",

      max: 50,
    },

    img: {
      type: "String",
    },
    userId: {
      type: "String",
      required: true,
    },
    slug: {
      type: "String",
      required: true,
      unique: true,
    },
  },
  { timestamps: true },
);
const testSchema = new mongoose.Schema({
  name: {
    type: "String",
    require: true,
  },
  age: {
    type: "Number",
  },
});
export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Post = mongoose.models.Post || mongoose.model("Post", postSchema);
export const Test = mongoose.models.Test || mongoose.model("Test", testSchema);
