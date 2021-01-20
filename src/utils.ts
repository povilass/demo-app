import {TreeItemModel} from "./models";

export function randomText() {
    return Math.random().toString(36).substring(7);
}

export function insertItemIntoTree(item: TreeItemModel, itemId: string, newItem: TreeItemModel) {
    if (item.id == itemId) {
        let n = new Date().getTime()+""+itemId;

        if (newItem) {
            newItem.id = n;
            newItem.leafs = [];

            if(!item.leafs) {
                item.leafs = [];
            }

            item.leafs.push(newItem);
        }

    } else if (item.leafs != null) {
        for (let i = 0; i < item.leafs.length; i++) {
            insertItemIntoTree(item.leafs[i], itemId, newItem);
        }

    }
}
