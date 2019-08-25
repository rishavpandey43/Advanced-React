const Query = {
  dogs(parent, args, ctx, info) {
    // never store in memory at global scope, because every time server restart, you'll loose everything
    global.dogs = global.dogs || [];
    return global.dogs;
  }
};

module.exports = Query;
