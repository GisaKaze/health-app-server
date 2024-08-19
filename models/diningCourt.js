/* Defines Schema in DB for a menu item */
const mongoose = require("mongoose");

const schema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        formalName: { type: String },
        googleID: { type: String },
        mealInfo: {type: [Object] }
    }
);

module.exports = mongoose.model("DiningCourt", schema);