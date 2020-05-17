module.exports = {
  newNote: async (parent, args, context) => {
    return await context.models.Note.create({
      content: args.content,
      author: 'Faizal'
    });
  }
};
