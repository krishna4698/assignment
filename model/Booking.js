import mongoose from "mongoose"

const bookingSchema = new mongoose.Schema(
  {
    

    passengerName: String,
    age: Number,
    distance: Number,
    tickets: Number,
    travelClass: {
      type: String,
      enum: ["Normal", "AC", "Sleeper", "Luxury"],
    },
    travelTime: {
      type: String,
      enum: ["Peak", "Off-Peak"],
    },

    fareBreakdown: {
      baseFare: Number,
      peakSurcharge: Number,
      ageDiscount: Number,
      groupDiscount: Number,
      serviceFee: Number,
      GST: Number,
      finalFare: Number,
    },
    createAT:Date
  }
  
);

module.exports = mongoose.model("Booking", bookingSchema);