const mongoose = require('mongoose');

// new mongoose.Schema(schemaDefinition, options);
const noteSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    }
  },
  {
    // Assigns createdAt and updatedAt fields with a Date type
    timestamps: true
  }
);

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
