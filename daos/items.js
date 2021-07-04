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
    // TODO: complete
}

module.exports.updateById = async (itemId, newObj) => {
    // TODO: complete
}

module.exports.create = async (item) => {
  const id = uuid.v4();
  const newItem = { ...item, id };
  module.exports.items.push(newItem);
  return newItem;
}