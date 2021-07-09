function findItemByKeyValue(items, key, value) {
    return items.find(item => item[key] === value);
}

function removeItemByKeyValue(items, key, value) {
    const idx = items.findIndex(
        item => item[key] === value
    );

    if(idx >= 0) {
        const deleted = items.splice(idx, 1);
        return deleted[0];
    }
}