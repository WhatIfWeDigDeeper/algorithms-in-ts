interface WeightedGraph {
  [node: string]: { [neighbor: string]: number };
}

interface CostsTable {
  [node: string]: number;
}

interface ParentsTable {
  [node: string]: string | null;
}

const findLowestCostNode = (costs: CostsTable, processed: string[]): string | null => {
  let lowestCost = Infinity;
  let lowestCostNode: string | null = null;

  for (const node in costs) {
    const cost = costs[node];
    if (cost < lowestCost && (processed.indexOf(node) === -1)) {
      lowestCost = cost;
      lowestCostNode = node;
    }
  }

  return lowestCostNode;
};

const findLowestCostPath = (graph: WeightedGraph, costs: CostsTable, parents: ParentsTable): CostsTable => {
  const processed: string[] = [];
  let node = findLowestCostNode(costs, processed);

  while (node !== null) {
    const currentNode = node;
    const cost = costs[currentNode];
    const neighbors = graph[currentNode];

    Object.keys(neighbors).forEach((n) => {
      const newCost = cost + neighbors[n];
      if (costs[n] > newCost) {
        costs[n] = newCost;
        parents[n] = currentNode;
      }
    });

    processed.push(node);
    node = findLowestCostNode(costs, processed);
  }

  return costs;
};

export default findLowestCostPath;
