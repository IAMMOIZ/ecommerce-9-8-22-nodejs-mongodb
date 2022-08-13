const { Role, SubscriptionType, Gender } = require("../enum/enum");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: [true, "firstname is required"] },
    lastName: { type: String, required: true },
    userName: {
      type: String,
      unique: [true, "User name is already exist"],
      required: true,
    },
    email: { type: String, unique: true, required: true },
    encPassword: { type: String, required: true },
    profileImage: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    subscriptionType: {
      type: String,
      enum: SubscriptionType,
      default: SubscriptionType.NOMAL,
    },
    userRole: { type: String, enum: Role, default: Role.USER },
    gender: { type: String, enum: Gender, default: Gender.NOT_MENTIONED },
    mobile: [
      {
        countryCode: { type: Number },
        number: { type: Number },
        isPrimary: { type: Boolean },
      },
    ],
    activeStatus: { type: String, default: "active", required: true }, //need to work
    address: {
      permanentAddress: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "addresses",
        required: [true, "Permanent address is required"],
      },
      currentAddress: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "addresses",
      },
      shippingAddress: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "addresses",
      },
    },
    paymentMethod: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PaymentMethod",
    },
    dateCreated: { type: Date, default: Date.now() },
    dateUpdate: { type: Date },
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  }
  // ,{
  //     timestamps :true
  // }
);

module.exports = mongoose.model("User", userSchema);
