import {TreeItemModel} from "./models";

export const recursionTree: TreeItemModel = {
    depth: 0,
    leafs: [{
        name: "Item 1",
        id: "1",
        depth: 1,
        leafs: [
            {
                name: "Item 1.1",
                id: "11",
                depth: 2,
                leafs: [
                    {
                        name: "Item 1.1.1",
                        id: "111",
                        depth: 3,
                    },
                    {
                        name: "Item 1.1.2",
                        id: "112",
                        depth: 3,
                    },
                    {
                        name: "Item 1.1.3",
                        id: "113",
                        depth: 3,
                    },
                ]
            },
            {
                name: "Item 1.2",
                id: "12",
                depth: 2,
            },
            {
                name: "Item 1.3",
                id: "13",
                depth: 2,
            },
        ]
    }]
};

export const iterationTree: TreeItemModel = {
    depth: 0,
    leafs: [{
        name: "Item 1",
        id: "1",
        depth: 1,
        leafs: [
            {
                name: "Item 1.1",
                id: "11",
                depth: 2,
                leafs: [
                    {
                        name: "Item 1.1.1",
                        id: "111",
                        depth: 3,
                    },
                    {
                        name: "Item 1.1.2",
                        id: "112",
                        depth: 3,
                    },
                    {
                        name: "Item 1.1.3",
                        id: "113",
                        depth: 3,
                    },
                ]
            },
            {
                name: "Item 1.2",
                id: "12",
                depth: 2,
            },
            {
                name: "Item 1.3",
                id: "13",
                depth: 2,
            },
        ]
    }]
};