import React from "react";
import {TreeItemModel} from "./models";
import {iterationTree} from "./data";
import {insertItemIntoTree} from "./utils";
import RecursiveExample from "./Recursive/RecursiveExample";
import IterativeExample from "./Iterative/IterativeExample";


const Combined = () => {

    const [tree, setTree] = React.useState<TreeItemModel>({...iterationTree});

    const add = (parentId: string, value: TreeItemModel) => {
        const newTree = {...tree};
        insertItemIntoTree(tree, parentId, value);
        setTree(newTree);
    };

    return (
        <div>
            <RecursiveExample tree={tree} add={add}/>
            <br/>
            <br/>
            <br/>
            <IterativeExample tree={tree} add={add}/>
        </div>
    );
};

export default Combined;
