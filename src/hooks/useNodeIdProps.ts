import { TreeNode } from "@designable/core";
import { useDesigner } from "@designable/react/lib/hooks/useDesigner";
import { useTreeNode } from "@designable/react/lib/hooks/useTreeNode";

export const useNodeIdProps = (node?: TreeNode) => {
  const target = useTreeNode();
  const designer = useDesigner();
  return {
    [designer?.props?.nodeIdAttrName]: node ? node?.id : target?.id,
  };
};
