import React from "react";
import {TreeItemModel} from "../models";
import {randomText} from "../utils";


type IterativeItem = {
    element: TreeItemModel;
}

type IterativeExampleProps = {
    tree: any;
    add: (parentId: string, value: TreeItemModel) => void;
};

const IterativeExample: React.FC<IterativeExampleProps> = (props) => {

    const {
        tree,
        add
    } = props;

    const getItems = () => {

        let flatTree: Array<IterativeItem> = [{
            element: {...tree}
        }];
        let stackItem = 0;
        let current;
        let children, i, len;

        while (current = flatTree[stackItem++]) {
            const parentIndex = flatTree.indexOf(current);
            current = current.element;
            children = current.leafs;
            if (children) {
                for (i = 0, len = children.length; i < len; i++) {
                    flatTree.splice(parentIndex + 1 + i, 0, {element: children[i]});
                }
            }
        }

        return flatTree;
    };

    const items = getItems();

    return (
        <div>
            {items && items.map(({element}) => {
                return (
                    <div style={{paddingLeft: 8 * element.depth}}>
                        {!!element.depth && (<div>- <span>{element.name}</span>
                                <button onClick={() => add(element.id, {
                                    depth: element.depth + 1,
                                    name: randomText()
                                })}>ADD
                                </button>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default IterativeExample;
