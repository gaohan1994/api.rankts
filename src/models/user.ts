import * as mongoose from "mongoose";

 const UserSchema = new mongoose.Schema({
     name   : String,
     win    : Number,
     lose   : Number,
     desc   : String,
     titles : [String],
 }, {
    timestamps: true
});

const User = mongoose.model("User", UserSchema);

export default User;