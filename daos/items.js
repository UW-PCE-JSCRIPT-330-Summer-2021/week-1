const uuid = require('uuid');

module.exports = {};

module.exports.items = [];

module.exports.getAll = () => {
  return module.exports.items;
};

module.exports.getById = (itemId) => {
  if(itemId) {  
    return module.exports.items.find(item => item.id === itemId);
  } else {
    return null;
  }
};

module.exports.deleteById = async (itemId) => {
  const removeId = module.exports.items.findIndex(item => item.id === itemId);
  return module.exports.items.splice(removeId, 1);
};

module.exports.updateById = async (itemId, newObj) => {
  const updateId = module.exports.items.findIndex(item => item.id === itemId);
  if(updateId >= 0) {
    return module.exports.items[updateId].field = newObj.field;
  }
};

module.exports.create = async (item) => {
  const id = uuid.v4();
  const newItem = { ...item, id };
  module.exports.items.push(newItem);
  return newItem;
};
