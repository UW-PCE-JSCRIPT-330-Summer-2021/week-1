const uuid = require('uuid');

module.exports = {};

module.exports.items = [];

module.exports.getAll = () => {
  return module.exports.items;
}

module.exports.getById = (itemId) => {
  let match = module.exports.items.find(item => item.id === itemId);
  if(match) { return match; } else { return null; }

}

module.exports.deleteById = async (itemId) => {
  let removeIndex = module.exports.items.map(item => item.id).indexOf(itemId);

  if(removeIndex >= 0) {
    module.exports.items.splice(removeIndex, 1);
  }

}

module.exports.updateById = async (itemId, newObj) => {
  let match = module.exports.items.find(item => item.id === itemId);

  if(match) {
    match.field = newObj.field;
  }

}

module.exports.create = async (item) => {
  const id = uuid.v4();
  const newItem = { ...item, id };
  module.exports.items.push(newItem);
  return newItem;
}