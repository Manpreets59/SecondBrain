// create model and Schema over here
import mongoose, {model, Schema} from "mongoose";

mongoose.connect("mongodb://Localhost:27017/brain")

const UserSchema = new Schema({
  username: {type: String, unique: true},
  password: String
})

export const UserModel = model("User",UserSchema);