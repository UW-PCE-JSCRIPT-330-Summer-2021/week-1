const uuid = require('uuid');

module.exports = {};

module.exports.items = [];

module.exports.getAll = () => {
  return module.exports.items;
};

module.exports.getById = (itemId) => {
  // TODO: complete
  const foundItem = module.exports.items.find((item) => item.id === itemId);
  if (!foundItem) {
    return res.status(404).json({ error: 'Item  not Found' });
  }
  return foundItem;
};

module.exports.deleteById = async (itemId) => {
  // TODO: complete
  module.exports.items = module.exports.items.filter(
    (item) => item.id != itemId
  );
  console.log(module.exports.items);
  return module.exports.items;
};

module.exports.updateById = async (itemId, newObj) => {
  // TODO: complete
  const { field } = newObj;
  module.exports.item = module.exports.items.find((item) => item.id === itemId);
  
  if (field) {
    module.exports.item.field = field;
  }
  return module.exports.item.field;
};

module.exports.create = async (item) => {
  const id = uuid.v4();
  const newItem = { ...item, id };
  module.exports.items.push(newItem);
  return newItem;
};
