const uuid = require('uuid');

module.exports = {};

module.exports.items = [{ id: '7', field: 'example' }];

module.exports.getAll = () => {
  return module.exports.items;
}

module.exports.getById = (itemId) => {
  // TODO: complete writing this function
}

module.exports.deleteById = async (itemId) => {
    // TODO: complete writing this function
}

module.exports.updateById = async (itemId, newObj) => {
    // TODO: complete writing this function
}

module.exports.create = async (item) => {
  const id = uuid.v4();
  const newItem = { ...item, id };
  module.exports.items.push(newItem);
  return newItem;
}