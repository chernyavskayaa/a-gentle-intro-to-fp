const tasks = [
  {
    id: 1,
    children: [
      {
        id: 2,
        children: [{ id: 3 }],
      },
      {
        id: 4,
      },
    ],
  },
  {
    id: 5,
  },
];

const defaultChildrenName = 'children';

const addDepth = (arr, depth = 0, childrenName = defaultChildrenName) => {
  return arr.map((item) => ({
    ...item,
    depth,
    [childrenName]: item[childrenName] ? addDepth(item[childrenName], depth + 1) : undefined,
  }));
};

const tasksWithDepth = addDepth(tasks);
