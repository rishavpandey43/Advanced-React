const mutations = {
  createDog(parent, args, ctx, info) {
    // never store in memory at global scope, because every time server restart, you'll loose everything
    global.dogs = global.dogs || [];
    // create a dog
    const newDog = { name: args.name };
    global.dogs.push(newDog);
    return newDog;
  }
};

module.exports = mutations;
