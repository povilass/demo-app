import React from "react";
import {TreeItemModel} from "../models";
import {initialTree} from "../data";



type IterativeItem = {
    element: TreeItemModel;
}

const IterativeExample = () => {

    const [tree] = React.useState<TreeItemModel>(initialTree);

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
                                <button onClick={() => null}>ADD</button>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default IterativeExample;