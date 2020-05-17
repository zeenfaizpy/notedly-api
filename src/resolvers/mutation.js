module.exports = {
  newNote: async (parent, args, context) => {
    return await context.models.Note.create({
      content: args.content,
      author: 'Faizal'
    });
  },
  updateNote: async (parent, args, context) => {
    return await context.models.Note.findOneAndUpdate(
      {
        _id: args.id
      },
      {
        $set: {
          content: args.content
        }
      },
      {
        new: true
      }
    );
  },
  deleteNote: async (parent, args, context) => {
    try {
      await context.models.Note.findOneAndRemove({ _id: args.id });
      return true;
    } catch (err) {
      return false;
    }
  }
};
