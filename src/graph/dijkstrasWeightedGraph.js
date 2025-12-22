
const findLowestCostNode = (costs, processed) => {
  let lowestCost = Infinity;
  let lowestCostNode = null;

  for (const node in costs) {
    const cost = costs[node];
    if (cost < lowestCost && (processed.indexOf(node) === -1)) {
      lowestCost = cost;
      lowestCostNode = node;
    }
  }

  return lowestCostNode;
};

const findLowestCostPath = (graph, costs, parents) => {
  const processed = [];
  let node = findLowestCostNode(costs, processed);

  while (node !== null) {
    const cost = costs[node];
    const neighbors = graph[node];

    Object.keys(neighbors).forEach((n) => {
      const newCost = cost + neighbors[n];
      if (costs[n] > newCost) {
        costs[n] = newCost;
        parents[n] = node;
      }
    });

    processed.push(node);
    node = findLowestCostNode(costs, processed);
  }

  return costs;
};

export default findLowestCostPath;
