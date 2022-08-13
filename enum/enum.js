const Role  = {
    ADMIN : 'ADMIN',
    USER : 'USER'
}

const SubscriptionType = {
    NORMAL : 'NORMAL',
    PRIME : "PRIME",
    SUBCRIPTION_ONE : "SUBCRIPTION_ONE"
}

const Gender = {
    MALE : "MALE",
    FEMALE : "FEMALE",
    NOT_MENTIONED : "NOT_MENTIONED"
}

const AddressEnum = {
    PERMANENT : "PERMANENT",
    RENTED : "RENTED",
    SHIPPING : "SHIPPING",
    CURRENT : "CURRENT",
    OTHER : "OTHER"
}

const CommonStatus = {
    ACTIVE : "ACTIVE" , DEACTIVE : "DEACTIVE", REMOVED : "REMOVED", TEMP_DISABLED : "TEMP_DISABLED" , WAIT_FOR_APPROVAL: "WAIT_FOR_APPROVAL"
}

module.exports = { Gender , SubscriptionType , Role , AddressEnum ,CommonStatus }