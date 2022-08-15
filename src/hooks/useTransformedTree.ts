import { useTree } from "@designable/react";
// import { transformToSchema } from "@designable/formily-transformer";
import { TreeNode } from "@designable/core";
// import { IFormilySchema } from "@designable/formily-transformer";

interface useTransformedTreeType {
  tTree: TreeNode;
  tree: TreeNode;
}

const useTransformedTree = (): useTransformedTreeType => {
  const tree = useTree();
  // const tTree = !!tree ? transformToSchema(tree) : {};

  return {
    tTree: tree,
    tree,
  };
};

export default useTransformedTree;
