import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// Define TypeScript interface
interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  favourites: mongoose.Types.ObjectId[];
  refreshToken?: string;
  isModified: (field: string) => boolean;
}

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    favourites: [
      {
        type: Schema.Types.ObjectId,
        ref: "Variant",
        default: null,
      },
    ],
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

// Hash password before saving
userSchema.pre("save", async function (this: IUser, next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.isPasswordCorrect = async function (password: string) {
  return await bcrypt.compare(password, this.password);
};

const secret = String(process.env.ACCESS_TOKEN_SECRET);
const expiry = Number(process.env.ACCESS_TOKEN_EXPIRY);

userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      name: this.name,
      email: this.email,
    },
    secret,
    { expiresIn: `${expiry}d` }
  );
};

userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    secret,
    { expiresIn: `${expiry}d` }
  );
};

export const User = mongoose.model("User", userSchema);
5555;
