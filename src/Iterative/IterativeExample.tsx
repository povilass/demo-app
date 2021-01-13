import React from "react";
import {TreeItemModel} from "../models";
import {initialTree} from "../data";
import {insertItemIntoTree, randomText} from "../utils";



type IterativeItem = {
    element: TreeItemModel;
}

const IterativeExample = () => {

    const [tree, setTree] = React.useState<TreeItemModel>(initialTree);

    const add = (parentId: string, value: TreeItemModel) => {
        const newTree = {...tree};
        insertItemIntoTree(newTree, parentId, value);
        setTree(newTree);
    };

    const getItems = () => {

        let stack: Array<IterativeItem> = [{
            element: {...tree}
        }];
        let stackItem = 0;
        let current;
        let children, i, len;

        while (current = stack[stackItem++]) {
            //get the arguments
            current = current.element;
            children = current.leafs;
            if(children) {
                for (i = 0, len = children.length; i < len; i++) {
                    stack.push({
                        element: children[i],
                    });
                }
            }
        }

        return stack;
    };

    const items = getItems();

    return (
        <div>
            {items && items.map(({element}) => {
                return (
                    <div style={{paddingLeft: 8 * element.depth}}>
                        {!!element.depth && (<div>- <span>{element.name}</span>
                                <button onClick={() => add(element.id, {
                                    depth: element.depth+1,
                                    name: randomText()
                                })}>ADD</button>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default IterativeExample;