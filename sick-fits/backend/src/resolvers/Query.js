const Query = {
  async items(parent, args, ctx, info) {
    const items = await ctx.db.query.items();
    return items;
  }

  // dogs(parent, args, ctx, info) {
  //   // never store in memory at global scope, because every time server restart, you'll loose everything
  //   global.dogs = global.dogs || [];
  //   return global.dogs;
  // }
};

module.exports = Query;
