import React from "react";
import {TreeItemModel} from "../models";
import {randomText} from "../utils";


type TreeItemProps = TreeItemModel & {
    onAdd: (parentId: string, value: TreeItemModel) => void;
};

const TreeItem: React.FC<TreeItemProps> = (props) => {
    const {depth, id, name, leafs, onAdd} = props;

    return (
        <div style={{paddingLeft: 8 * depth}}>
            {!!depth && (<div>- <span>{name}</span>
                    <button onClick={() => onAdd(id, {
                        depth: depth + 1,
                        name: randomText()
                    })}>ADD
                    </button>
                </div>
            )}
            {leafs && leafs.map((leaf) => {
                return (<TreeItem key={`item-${leaf.id}`} {...leaf} onAdd={onAdd}/>);
            })}
        </div>
    );
};


type RecursiveExampleProps = {
    tree: any;
    add: (parentId: string, value: TreeItemModel) => void;
};

const RecursiveExample: React.FC<RecursiveExampleProps> = (props) => {

    const {
        tree,
        add
    } = props;

    return (
        <div>
            <TreeItem {...tree} onAdd={add}/>
        </div>
    );
};

export default RecursiveExample;
