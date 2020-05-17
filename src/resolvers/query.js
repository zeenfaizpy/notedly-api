module.exports = {
  notes: async (parent, args, context) => {
    return await context.models.Note.find();
  },
  note: async (parent, args, context) => {
    return await context.models.Note.findById(args.id);
  }
};
