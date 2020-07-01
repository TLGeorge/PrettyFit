const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [{
        type: {
            type: String,
            required: true
        },
        name: {
            type: String,
            trim: true,
            require: true
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        duration: {
            type: Number,
            required: true
        },
        distance: {
            type: Number
        }
    }],
    totalDuration: {
        type: Number,
        default: 0
    }
});

WorkoutSchema.methods.addDuration = function (exDuration) {
    return this.totalDuration += exDuration;
};

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;