const uuid = require('uuid');

module.exports = {};

module.exports.items = [{ id: 'test1', field: 'val' }, { id: 'test2', field: 'val2' }];

module.exports.getAll = () => 
{
  return module.exports.items;
}

module.exports.getById = (itemId) =>
{
  const index = module.exports.items.findIndex(item => item.id === itemId);
  return module.exports.items[index];
}

module.exports.deleteById = async (itemId) =>
{
  const index = module.exports.items.findIndex(item => item.id === itemId);
  if (index >= 0)
  {
    const deleted = module.exports.items.splice(index, 1);
    return deleted[0];
  }
}

module.exports.updateById = async (itemId, newObj) => 
{
  const index = module.exports.items.findIndex(item => item.id === itemId);

  if (index >= 0 && newObj !== undefined)
  {
    module.exports.items[index].field = newObj;
  }
}

module.exports.create = async (item) => 
{
  const id = uuid.v4();
  const newItem = { ...item, id };
  module.exports.items.push(newItem);
  return newItem;
}
