import mongoose from "mongoose";
 const userSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            require: true,
            trim: true,
        },

        email:{
            type: String,
            require: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

        password:{
            type: String,
            require: function(){
                require.this.provider ==="local"
            },
        },
         
        avatar:{
            type: String,
            default : "",
        },

        provider : {
            type : String,
            enum : ["local", "google", "github"],
            default: "local",
        },

        googleId: {
            type:String,
            default: null,
        },
    },

    {
        timestamps: true,
    }

 );
const User = mongoose.model("User", userSchema);

export default User;