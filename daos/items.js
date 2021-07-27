const uuid = require('uuid');

module.exports = {};

module.exports.items = [];

module.exports.getAll = () => {
  return module.exports.items;
}

module.exports.getById = (itemId) => {
  const item = module.exports.items.find( c=> c.id === itemId);
  if (item == null) {
    return null;
  }
  return {...item};
}

module.exports.deleteById = async (itemId) => {
  const itemNumber = module.exports.items.findIndex(i => i.id === itemId);
  module.exports.items.splice(itemNumber, 1);
  
}

module.exports.updateById = async (itemId, newObj) => {
  const existingItem = module.exports.getById(itemId);
  if (existingItem == null) {
    return -1; 
  } else {

    const newItem = { ...newObj};
    console.log(`ID: ${newObj.id}`);
    console.log(`Field: ${newObj.field}`);
    existingItem.field = newItem.field;
    const itemNumber = module.exports.items.findIndex(i => i.id === itemId);
    module.exports.items.splice(itemNumber, 1, existingItem);
  }
}

module.exports.create = async (item) => {
  const id = uuid.v4();
  const newItem = { ...item, id };
  module.exports.items.push(newItem);
  return newItem;
}