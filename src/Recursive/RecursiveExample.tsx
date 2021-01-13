import React from "react";
import {TreeItemModel} from "../models";
import {initialTree} from "../data";
import {insertItemIntoTree, randomText} from "../utils";


type TreeItemProps = TreeItemModel & {
    onAdd: (parentId: string, value: TreeItemModel) => void;
};

const TreeItem: React.FC<TreeItemProps> = (props) => {
    const {depth, id, name, leafs, onAdd} = props;

    return (
        <div style={{paddingLeft: 8 * depth}}>
            {!!depth && (<div>- <span>{name}</span>
                    <button onClick={() => onAdd(id, {
                        depth: depth+1,
                        name: randomText()
                    })}>ADD</button>
                </div>
            )}
            {leafs && leafs.map((leaf) => {
                return (<TreeItem key={`item-${leaf.id}`} {...leaf} onAdd={onAdd}/>);
            })}
        </div>
    );
};


const RecursiveExample = () => {

    const [tree, setTree] = React.useState<TreeItemModel>(initialTree);

    const add = (parentId: string, value: TreeItemModel) => {
        const newTree = {...tree};
        insertItemIntoTree(newTree, parentId, value);
        setTree(newTree);
    };

    return (
        <div>
            <TreeItem {...tree} onAdd={add}/>
        </div>
    );
};

export default RecursiveExample;