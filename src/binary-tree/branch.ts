import { head, tail, take, skip } from '../util';

export class Node<K, V> {
  readonly key: K;
  readonly value: V;

  constructor(key: K, val: V) {
    this.key = key;
    this.value = val;
  }
}

export class Leaf {
  readonly isLeafFlag = true as const;
  isLeaf(): boolean {
    return this.isLeafFlag;
  }
}

type TreeNode<K, V> = Branch<K, V> | Leaf;

const leaf = new Leaf();

class Branch<K, V> {
  private readonly treeNode: Node<K, V>;
  private readonly leftBranch: TreeNode<K, V>;
  private readonly rightBranch: TreeNode<K, V>;
  private readonly isLeafBranch = false as const;

  constructor(node: Node<K, V>, left: TreeNode<K, V> = leaf, right: TreeNode<K, V> = leaf) {
    this.treeNode = node;
    this.leftBranch = left;
    this.rightBranch = right;
  }

  node(): Node<K, V> {
    return this.treeNode;
  }

  left(): TreeNode<K, V> {
    return this.leftBranch;
  }

  right(): TreeNode<K, V> {
    return this.rightBranch;
  }

  isLeaf(): boolean {
    return this.isLeafBranch;
  }
}

export const buildTree = <T>(list: T[]): TreeNode<T, T> => {
  if (list.length === 0) {
    return new Leaf();
  }
  const x = head(list) as T;
  const xs = tail(list) as T[];
  const k = Math.floor(xs.length / 2);
  const first = take(k, xs);
  const last = skip(k, xs);
  return new Branch(new Node(x, x), buildTree(first), buildTree(last));
};

export const traverse = <K, V>(branch: TreeNode<K, V>): Node<K, V>[] => {
  if (branch.isLeaf()) {
    return [];
  }
  const b = branch as Branch<K, V>;
  return ([] as Node<K, V>[]).concat(b.node()).concat(traverse(b.left())).concat(traverse(b.right()));
};

export const traverseAcc = <K, V>(branch: TreeNode<K, V>, acc: Node<K, V>[] = []): Node<K, V>[] => {
  if (branch.isLeaf()) {
    return acc;
  }
  const b = branch as Branch<K, V>;
  return ([] as Node<K, V>[]).concat(b.node())
    .concat(traverseAcc(b.left(), traverseAcc(b.right(), acc)));
};

export default Branch;
