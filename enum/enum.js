const Role = {
  ADMIN: "ADMIN",
  USER: "USER",
  SUPERADMIN: "SUPERADMIN",
  SALLER: "SALLER",
};

const SubscriptionType = {
  NORMAL: "NORMAL",
  PRIME: "PRIME",
  SUBCRIPTION_ONE: "SUBCRIPTION_ONE",
};

const Gender = {
  MALE: "MALE",
  FEMALE: "FEMALE",
  NOT_MENTIONED: "NOT_MENTIONED",
};

const AddressEnum = {
  PERMANENT: "PERMANENT",
  RENTED: "RENTED",
  SHIPPING: "SHIPPING",
  CURRENT: "CURRENT",
  OTHER: "OTHER",
};

const CommonStatus = {
  ACTIVE: "ACTIVE",
  DEACTIVE: "DEACTIVE",
  REMOVED: "REMOVED",
  TEMP_DISABLED: "TEMP_DISABLED",
  WAIT_FOR_APPROVAL: "WAIT_FOR_APPROVAL",
};
const ReviewForEnum = {
  SALLER:"SALLER",
  PRODUCT:"PRODUCT"
};

const ImageType = {
  THUMBNAIL: "THUMBNAIL",
  MAIN: "MAIN",
  ICON: "ICON",
  EXTRA: "EXTRA",
};

const AvailablityStatus = {
  NONE: "NONE",
  OUT_OF_STOCK: "OUT_OF_STOCK",
  FEW_REMAINING: "FEW_REMAINING",
  AVAILABLE: "AVAILABLE",
  TEMP_UNAVAILABLE: "TEMP_UNAVAILABLE",
  WAIT_FOR_APPROVAL: "WAIT_FOR_APPROVAL",
};

const OrderStatus = {
  PLACED : "PLACED",
  CANCEL : "CANCEL" ,
  REFUNDED : "REFUNDED",
  DELIVERED : "DELIVERED" ,
  ATSTORE : "ATSTORE",
  ATDELIVERYSTORE : "ATDELIVERYSTORE",
  NONE : "NONE"
}
module.exports = {
  Gender,
  SubscriptionType,
  Role,
  AddressEnum,
  CommonStatus,
  ImageType,
  AvailablityStatus,
  OrderStatus
};
