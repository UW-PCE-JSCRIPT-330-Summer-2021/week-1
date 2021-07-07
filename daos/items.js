const uuid = require('uuid');

module.exports = {};

module.exports.items = [];

module.exports.getAll = () => {
  return module.exports.items;
}

module.exports.getById = (itemId) => {
  // TODO: complete
  let index =module.exports.items.find(item => item.id === itemId)
  if (index) { return index} else {return null}
}

module.exports.deleteById = async (itemId) => {
    // TODO: complete
    let removeIndex =module.exports.items.map(item =>item.id). indexOf(itemID)
    if (removeIndex >= 0){
      module.exports.items.splice(removeIndex, 1)
    }
      
}

module.exports.updateById = async (itemId, newObj) => {
    // TODO: complete
    let index = module.exports.items.find(item => item.id ===itemId)
    if(index) {
      matchMedia.field = newObj.field
    }
}

module.exports.create = async (item) => {
  const id = uuid.v4();
  const newItem = { ...item, id };
  module.exports.items.push(newItem);
  return newItem;
}