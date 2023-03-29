import mongoose from "mongoose";

const ticketCollection = "tickets";

const ticketSchema = new mongoose.Schema({
  code: {
    type: String,
  },
  purchase_datetime: {
    type: new Date(0),
  },
  purchaser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "registro",
  },
},);
ticketSchema.plugin(mongoosePaginate);
export const ticketModel = mongoose.model(ticketCollection, ticketSchema);