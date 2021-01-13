export type TreeItemModel = {
    depth?: number;
    name?: string;
    id?: string;
    leafs?: Array<TreeItemModel>;
};