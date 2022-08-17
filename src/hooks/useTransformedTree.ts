import { useTree } from "@designable/react";
// import { transformToSchema } from "@designable/formily-transformer";
import { TreeNode } from "@designable/core";
// import { IFormilySchema } from "@designable/formily-transformer";

interface IUseTransformedTreeType {
  tTree: TreeNode;
  tree: TreeNode;
}

const useTransformedTree = (): IUseTransformedTreeType => {
  const tree = useTree();
  // const tTree = !!tree ? transformToSchema(tree) : {};

  return {
    tTree: tree,
    tree,
  };
};

export default useTransformedTree;
