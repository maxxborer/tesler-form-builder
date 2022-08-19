import React from "react";
import { Table as TableBase, TableProps } from "antd";
import { TreeNode, createBehavior, createResource } from "@designable/core";
import { useTreeNode, TreeNodeWidget, DroppableWidget, DnFC } from "@designable/react";
import { ArrayBase } from "@formily/antd";
import { observer } from "@formily/react";
import cls from "classnames";
import { LoadTemplate } from "../../common/LoadTemplate";
import {
  queryNodesByComponentPath,
  hasNodeByComponentPath,
  findNodeByComponentPath,
  createEnsureTypeItemsNode,
} from "../../shared";
import { useDropTemplate, useNodeIdProps } from "../../hooks";
import { createArrayBehavior } from "../ArrayBase";
import "./styles.scoped.less";
import { createVoidFieldSchema } from "../Field";
import { AllSchemas } from "../../schemas";
import { AllLocales } from "../../locales";
import TableIcon from "./Table.svg";

const ensureObjectItemsNode = createEnsureTypeItemsNode("object");

const HeaderCell: React.FC = (props: any) => {
  return (
    <th
      {...props}
      data-designer-node-id={props.className.match(/data-id\:([^\s]+)/)?.[1]}
    >
      {props.children}
    </th>
  );
};

const BodyCell: React.FC = (props: any) => {
  return (
    <td
      {...props}
      data-designer-node-id={props.className.match(/data-id\:([^\s]+)/)?.[1]}
    >
      {props.children}
    </td>
  );
};

export const Tables: DnFC<TableProps<any>> = observer((props) => {
  const node = useTreeNode();
  const nodeId = useNodeIdProps(node);
  useDropTemplate("Tables", (source) => {
    const sortHandleNode = new TreeNode({
      componentName: "Field",
      props: {
        type: "void",
        "x-component": "Tables.Column",
        "x-component-props": {
          title: "Title",
        },
      },
      children: [
        {
          componentName: "Field",
          props: {
            type: "void",
            "x-component": "Tables.SortHandle",
          },
        },
      ],
    });
    const indexNode = new TreeNode({
      componentName: "Field",
      props: {
        type: "void",
        "x-component": "Tables.Column",
        "x-component-props": {
          title: "Title",
        },
      },
      children: [
        {
          componentName: "Field",
          props: {
            type: "void",
            "x-component": "Tables.Index",
          },
        },
      ],
    });
    const columnNode = new TreeNode({
      componentName: "Field",
      props: {
        type: "void",
        "x-component": "Tables.Column",
        "x-component-props": {
          title: "Title",
        },
      },
      children: source.map((innerNode) => {
        innerNode.props.title = undefined;
        return innerNode;
      }),
    });

    const operationNode = new TreeNode({
      componentName: "Field",
      props: {
        type: "void",
        "x-component": "Tables.Column",
        "x-component-props": {
          title: "Title",
        },
      },
      children: [
        {
          componentName: "Field",
          props: {
            type: "void",
            "x-component": "Tables.Remove",
          },
        },
        {
          componentName: "Field",
          props: {
            type: "void",
            "x-component": "Tables.MoveDown",
          },
        },
        {
          componentName: "Field",
          props: {
            type: "void",
            "x-component": "Tables.MoveUp",
          },
        },
      ],
    });
    const objectNode = new TreeNode({
      componentName: "Field",
      props: {
        type: "object",
      },
      children: [sortHandleNode, indexNode, columnNode, operationNode],
    });
    const additionNode = new TreeNode({
      componentName: "Field",
      props: {
        type: "void",
        title: "Addition",
        "x-component": "Tables.Addition",
      },
    });
    return [objectNode, additionNode];
  });
  const columns = queryNodesByComponentPath(node, ["Tables", "*", "Tables.Column"]);
  const additions = queryNodesByComponentPath(node, ["Tables", "Tables.Addition"]);
  const defaultRowKey = () => {
    return node.id;
  };

  const renderTable = () => {
    if (node.children.length === 0) {
      return <DroppableWidget />;
    }
    return (
      <ArrayBase disabled>
        <TableBase
          size="small"
          bordered
          {...props}
          scroll={{ x: "100%" }}
          className={cls("ant-formily-array-table", props.className)}
          style={{ marginBottom: 10, ...props.style }}
          rowKey={defaultRowKey}
          dataSource={[{ id: "1" }]}
          pagination={false}
          components={{
            header: {
              cell: HeaderCell,
            },
            body: {
              cell: BodyCell,
            },
          }}
        >
          {columns.map((innerNode) => {
            const children = innerNode.children.map((child) => {
              return (
                <TreeNodeWidget
                  node={child}
                  key={child.id}
                />
              );
            });
            const innerProps = innerNode.props["x-component-props"];
            return (
              <TableBase.Column
                {...innerProps}
                title={
                  <div data-content-editable="x-component-props.title">{innerProps.title}</div>
                }
                dataIndex={innerNode.id}
                className={`data-id:${innerNode.id}`}
                key={innerNode.id}
                render={(value, record, key) => {
                  return (
                    <ArrayBase.Item
                      key={key}
                      index={key}
                      record={null}
                    >
                      {children.length > 0 ? children : "Droppable"}
                    </ArrayBase.Item>
                  );
                }}
              />
            );
          })}
          {columns.length === 0 && <TableBase.Column render={() => <DroppableWidget />} />}
        </TableBase>
        {additions.map((child) => {
          return (
            <TreeNodeWidget
              node={child}
              key={child.id}
            />
          );
        })}
      </ArrayBase>
    );
  };

  useDropTemplate("Tables.Column", (source) => {
    return source.map((innerNode) => {
      innerNode.props.title = undefined;
      return innerNode;
    });
  });

  return (
    <div
      {...nodeId}
      className="dn-array-table"
    >
      {renderTable()}
      <LoadTemplate
        actions={[
          {
            title: node.getMessage("addSortHandle"),
            icon: "AddSort",
            onClick: () => {
              if (
                hasNodeByComponentPath(node, ["Tables", "*", "Tables.Column", "Tables.SortHandle"])
              ) {
                return;
              }
              const tableColumn = new TreeNode({
                componentName: "Field",
                props: {
                  type: "void",
                  "x-component": "Tables.Column",
                  "x-component-props": {
                    title: "Title",
                  },
                },
                children: [
                  {
                    componentName: "Field",
                    props: {
                      type: "void",
                      "x-component": "Tables.SortHandle",
                    },
                  },
                ],
              });
              ensureObjectItemsNode(node).prepend(tableColumn);
            },
          },
          {
            title: node.getMessage("addIndex"),
            icon: "AddIndex",
            onClick: () => {
              if (hasNodeByComponentPath(node, ["Tables", "*", "Tables.Column", "Tables.Index"])) {
                return;
              }
              const tableColumn = new TreeNode({
                componentName: "Field",
                props: {
                  type: "void",
                  "x-component": "Tables.Column",
                  "x-component-props": {
                    title: "Title",
                  },
                },
                children: [
                  {
                    componentName: "Field",
                    props: {
                      type: "void",
                      "x-component": "Tables.Index",
                    },
                  },
                ],
              });
              const sortNode = findNodeByComponentPath(node, [
                "Tables",
                "*",
                "Tables.Column",
                "Tables.SortHandle",
              ]);
              if (sortNode) {
                sortNode.parent.insertAfter(tableColumn);
              } else {
                ensureObjectItemsNode(node).prepend(tableColumn);
              }
            },
          },
          {
            title: node.getMessage("addColumn"),
            icon: "AddColumn",
            onClick: () => {
              const operationNode = findNodeByComponentPath(node, [
                "Tables",
                "*",
                "Tables.Column",
                (name) => {
                  return (
                    name === "Tables.Remove" ||
                    name === "Tables.MoveDown" ||
                    name === "Tables.MoveUp"
                  );
                },
              ]);
              const tableColumn = new TreeNode({
                componentName: "Field",
                props: {
                  type: "void",
                  "x-component": "Tables.Column",
                  "x-component-props": {
                    title: "Title",
                  },
                },
              });
              if (operationNode) {
                operationNode.parent.insertBefore(tableColumn);
              } else {
                ensureObjectItemsNode(node).append(tableColumn);
              }
            },
          },
          {
            title: node.getMessage("addOperation"),
            icon: "AddOperation",
            onClick: () => {
              const oldOperationNode = findNodeByComponentPath(node, [
                "Tables",
                "*",
                "Tables.Column",
                (name) => {
                  return (
                    name === "Tables.Remove" ||
                    name === "Tables.MoveDown" ||
                    name === "Tables.MoveUp"
                  );
                },
              ]);
              const oldAdditionNode = findNodeByComponentPath(node, ["Tables", "Tables.Addition"]);
              if (!oldOperationNode) {
                const operationNode = new TreeNode({
                  componentName: "Field",
                  props: {
                    type: "void",
                    "x-component": "Tables.Column",
                    "x-component-props": {
                      title: "Title",
                    },
                  },
                  children: [
                    {
                      componentName: "Field",
                      props: {
                        type: "void",
                        "x-component": "Tables.Remove",
                      },
                    },
                    {
                      componentName: "Field",
                      props: {
                        type: "void",
                        "x-component": "Tables.MoveDown",
                      },
                    },
                    {
                      componentName: "Field",
                      props: {
                        type: "void",
                        "x-component": "Tables.MoveUp",
                      },
                    },
                  ],
                });
                ensureObjectItemsNode(node).append(operationNode);
              }
              if (!oldAdditionNode) {
                const additionNode = new TreeNode({
                  componentName: "Field",
                  props: {
                    type: "void",
                    title: "Addition",
                    "x-component": "Tables.Addition",
                  },
                });
                ensureObjectItemsNode(node).insertAfter(additionNode);
              }
            },
          },
        ]}
      />
    </div>
  );
});

ArrayBase.mixin(Tables);

Tables.Behavior = createBehavior(createArrayBehavior("Tables"), {
  name: "Tables.Column",
  extends: ["Field"],
  selector: (node) => node.props["x-component"] === "Tables.Column",
  designerProps: {
    droppable: true,
    allowDrop: (node) =>
      node.props.type === "object" && node.parent?.props?.["x-component"] === "Tables",
    propsSchema: createVoidFieldSchema(AllSchemas.Tables.Column),
  },
  designerLocales: AllLocales.Tables,
});

Tables.Resource = createResource({
  icon: <TableIcon />,
  elements: [
    {
      componentName: "Field",
      props: {
        type: "array",
        "x-decorator": "FormItem",
        "x-component": "Tables",
      },
    },
  ],
});
