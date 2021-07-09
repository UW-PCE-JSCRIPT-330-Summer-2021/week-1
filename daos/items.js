const uuid = require('uuid');

module.exports = {};

module.exports.items = [];

module.exports.getAll = () => {
  return module.exports.items;
}

module.exports.getById = (itemId) => {
  const match = module.exports.items.find(item => item.id === itemId);
  if(match) {
    return match;
  } else {
    return null;
  }
};

module.exports.deleteById = async (itemId) => {
  const removeIndex = module.exports.items.findIndex(item => item.id === itemId);
  if (removeIndex >= 0) {
    module.exports.items.splice(removeIndex, 1);
  }
};

module.exports.updateById = async (itemId, newObj) => {
  const match = module.exports.items.find(item => item.id === itemId);
  if (match) {
    match.field = newObj.field;
  }
};

module.exports.create = async (item) => {
  const id = uuid.v4();
  const newItem = { ...item, id };
  module.exports.items.push(newItem);
  return newItem;
}