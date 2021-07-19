const uuid = require('uuid');

module.exports = {};

module.exports.items = [];

module.exports.getAll = () => {
	return module.exports.items;
};

module.exports.getById = (itemId) => {
	return module.exports.items.find((item) => item.id === itemId);
};

module.exports.deleteById = async (itemId) => {
	const indexRemove = module.exports.items.findIndex(
		(item) => item.id === itemId
	);
	return module.exports.items.splice(indexRemove, 1);
};

module.exports.updateById = async (itemId, newObj) => {
	const indexReplace = module.exports.items.findIndex(
		(item) => item.id === itemId
	);
	if (indexReplace >= 0) {
		return (module.exports.items[indexReplace].field = newObj.field);
	}
};

module.exports.create = async (item) => {
	const id = uuid.v4();
	const newItem = { ...item, id };
	module.exports.items.push(newItem);
	return newItem;
};
