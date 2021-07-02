const uuid = require('uuid');

module.exports = {};

module.exports.items = [];

module.exports.getAll = () => {
  return module.exports.items;
}

module.exports.getById = (itemId) => {
  // TODO: complete
  if(itemId){  
    return module.exports.items.find(item => item.id === itemId);
  } else {
    return null;
  }
  
}

module.exports.deleteById = async (itemId) => {
    // TODO: complete
    if(itemId ){
     const idx = module.exports.items.findIndex((obj => obj.id == itemId));
     const deleted =  module.exports.items.splice(idx,1);
    }
}

module.exports.updateById = async (itemId, newObj) => {
    // TODO: complete
    if(itemId){
      const idx = module.exports.items.findIndex((obj => obj.id == itemId));
      if(module.exports.items[idx]){
        module.exports.items[idx].field = newObj.field;
      }      
     }
}

module.exports.create = async (item) => {
  const id = uuid.v4();
  const newItem = { ...item, id };
  module.exports.items.push(newItem);
  return newItem;
}