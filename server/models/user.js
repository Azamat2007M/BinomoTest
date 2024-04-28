const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        phone: {
            type: Number,
        },
        password: {
            type: String,
            required: true,
            trim: true,
        },
        accepted: {
            type: Boolean,
            required: true,
        },
        typewallet: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        wallet: {
            type: Number,
            required: true,
        },
        useractived: {
            type: Boolean,
            required: true,
        },
        realwallet: {
            type: Boolean,
            required: true,
        },
        enterConditional: {
            type: Boolean,
            required: true,
        },
        role: {
            type: String,
            required: true,
        },
        followers: {
            type: Number,
            required: true,
        },
        level: {
            type: Number,
            required: true,
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model("User", userSchema)