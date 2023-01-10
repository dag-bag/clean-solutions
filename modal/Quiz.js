/** @format */

const mongoose = require("mongoose");
const page1Data = {
  name: {
    type: String,
    required: true,
  },
};
const page2Data = {
  index: {
    type: Number,
    required: true,
  },
  svgs: {
    type: Array[String],
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
};
const page4Data = {
  f: {
    type: Number,
  },
  ml: {
    type: Number,
  },
  question: {
    type: String,
  },
  r: {
    type: String,
  },
  type: {
    type: String,
  },
  uni: {
    type: String,
  },
  value: {
    type: String,
  },
};
const page3Data = {
  description: {
    type: String,
    required: true,
  },
  modalText: {
    type: String,
    required: true,
  },
  questions: Array[page4Data],
  svgs: {
    type: Array[String],
  },
  title: {
    type: String,
    required: true,
  },
};

const quizSchema = new mongoose.Schema(
  {
    page1Data: Object,
    page2Data: Array,
    page3Data: Array,
    page4Data: Array,
  },
  { timestamps: true }
);
mongoose.models = {};

module.exports = mongoose.model("Quiz", quizSchema);
