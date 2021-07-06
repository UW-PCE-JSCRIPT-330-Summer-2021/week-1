const uuid = require('uuid');

module.exports = {};

module.exports.items = [];

module.exports.getAll = () => {
  return module.exports.items;
}

module.exports.getById = (itemId) => {
  return module.exports.items.find(item => item.id === itemId);
}

module.exports.deleteById = async (itemId) => {
  const itemIndex = module.exports.items.findIndex(item => item.id === itemId);
  if (itemIndex >= 0) {
    const deletedItem = module.exports.items.splice(itemIndex, 1);
    return deletedItem[0];
  }
}

module.exports.updateById = async (itemId, newObj) => {
  const thisItemIndex = module.exports.items.findIndex(item => item.id === itemId);
  if (thisItemIndex >= 0) {
    module.exports.items[thisItemIndex].field = newObj.field;
    return module.exports.items[thisItemIndex];
  }
}

module.exports.create = async (item) => {
  const id = uuid.v4();
  const newItem = { ...item, id };
  module.exports.items.push(newItem);
  return newItem;
}
