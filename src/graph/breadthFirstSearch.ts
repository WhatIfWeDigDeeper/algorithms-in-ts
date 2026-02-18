import { head, tail, isEmpty } from '../util';

interface Graph {
  [node: string]: string[];
}

const breadthFirstSearch = (graph: Graph, predicate: (name: string) => boolean, name: string): string | null => {
  let searchQueue: string[] = [];
  searchQueue = searchQueue.concat(graph[name]);
  // This array is how you keep track of which people you've searched before.
  const searched = new Set<string>();
  while (searchQueue.length) {
    const first = searchQueue.shift()!;
    // Only search this first if you haven't already searched them
    if (searched.has(first)) continue;

    if (predicate(first)) {
      return first;
    }

    searchQueue = searchQueue.concat(graph[first]);
    // Marks this first as searched
    searched.add(first);
  }
  return null;
};

const bfSearchRecursive = (
  graph: Graph,
  predicate: (name: string) => boolean,
  searchQ: string[],
  seen: Set<string>,
): string | null => {
  if (isEmpty(searchQ)) {
    return null;
  }
  const x = head(searchQ) as string;
  if (predicate(x)) {
    return x;
  }
  const searchQTail = tail(searchQ) as string[];
  if (seen.has(x)) {
    return bfSearchRecursive(graph, predicate, searchQTail, seen);
  }
  seen.add(x);
  return bfSearchRecursive(graph, predicate, graph[x].concat(searchQTail), seen);
};

export const breadthFirstSearchRecursive = (
  graph: Graph,
  predicate: (name: string) => boolean,
  node: string,
): string | null => (
  bfSearchRecursive(graph, predicate, graph[node], new Set<string>())
);

export default breadthFirstSearch;
