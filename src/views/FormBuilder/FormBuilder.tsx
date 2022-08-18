import "antd/dist/antd.less";
import * as React from "react";
import {
  Designer,
  DesignerToolsWidget,
  ViewToolsWidget,
  Workspace,
  OutlineTreeWidget,
  ResourceWidget,
  HistoryWidget,
  StudioPanel,
  CompositePanel,
  WorkspacePanel,
  ToolbarPanel,
  ViewportPanel,
  ViewPanel,
  SettingsPanel,
  ComponentTreeWidget,
} from "@designable/react";
import { SettingsForm } from "@designable/react-settings-form";
import { createDesigner, GlobalRegistry } from "@designable/core";
import {
  ActionsWidget,
  PreviewWidget,
  SchemaEditorWidget,
  MarkupSchemaWidget,
} from "../../widgets";
import {
  Form,
  Field,
  Input,
  Select,
  TreeSelect,
  Cascader,
  Radio,
  Checkbox,
  Slider,
  // Rate,
  NumberPicker,
  // Transfer,
  // Password,
  DatePicker,
  TimePicker,
  Upload,
  Switch,
  Text,
  Card,
  ArrayCards,
  ObjectContainer,
  ArrayTable,
  Space,
  FormTab,
  FormCollapse,
  FormLayout,
  FormGrid,
  // Tables,
} from "../../components";
import "./FormBuilder.css";
import { IFormilySchema } from "@designable/formily-transformer";

GlobalRegistry.registerDesignerLocales({
  "ru-RU": {
    sources: {
      Inputs: "Компоненты",
      Layouts: "Верстка",
      Arrays: "Массивы",
      Displays: "Контент",
    },
  },
  "en-US": {
    sources: {
      Inputs: "Inputs",
      Layouts: "Layouts",
      Arrays: "Arrays",
      Displays: "Displays",
    },
  },
});

export interface FormBuilderProps {
  style?: React.CSSProperties;
  initialJson?: IFormilySchema;
  actions?: React.ReactNode;
  // onChange?: (json: IFormilySchema) => void;
  onSave?: (json: IFormilySchema) => void;
  onPublish?: (json: IFormilySchema) => void;
}

const FormBuilder: React.FC<FormBuilderProps> = ({
  initialJson,
  actions,
  style,
  onSave,
  onPublish,
}) => {
  const engine = React.useMemo(
    () =>
      createDesigner({
        rootComponentName: "Form",
      }),
    []
  );

  const inputs = [
    Input,
    // Password,
    NumberPicker,
    // Rate,
    Slider,
    Select,
    TreeSelect,
    Cascader,
    // Transfer,
    Checkbox,
    Radio,
    DatePicker,
    TimePicker,
    Upload,
    Switch,
    ObjectContainer,
    Text,
  ];
  const layouts = [Card, FormGrid, FormTab, FormLayout, FormCollapse, Space];
  const arrays = [ArrayCards, ArrayTable];

  const components = {
    Form,
    Field,
    Input,
    Select,
    TreeSelect,
    Cascader,
    Radio,
    Checkbox,
    Slider,
    // Rate,
    NumberPicker,
    // Transfer,
    // Password,
    DatePicker,
    TimePicker,
    Upload,
    Switch,
    Text,
    Card,
    ArrayCards,
    ArrayTable,
    Space,
    FormTab,
    FormCollapse,
    FormGrid,
    FormLayout,
    ObjectContainer,
  };

  return (
    <div
      id="tesler-form-builder"
      style={style}
    >
      <Designer engine={engine}>
        <StudioPanel
          logo={actions}
          actions={
            <ActionsWidget
              initialJson={initialJson}
              onSave={onSave}
              onPublish={onPublish}
            />
          }
        >
          <CompositePanel>
            <CompositePanel.Item
              title="panels.Component"
              icon="Component"
            >
              <ResourceWidget
                title="sources.Inputs"
                sources={inputs}
              />
              <ResourceWidget
                title="sources.Layouts"
                sources={layouts}
              />
              <ResourceWidget
                title="sources.Arrays"
                sources={arrays}
              />
            </CompositePanel.Item>
            <CompositePanel.Item
              title="panels.OutlinedTree"
              icon="Outline"
            >
              <OutlineTreeWidget />
            </CompositePanel.Item>
            <CompositePanel.Item
              title="panels.History"
              icon="History"
            >
              <HistoryWidget />
            </CompositePanel.Item>
          </CompositePanel>
          <Workspace id="form">
            <WorkspacePanel>
              <ToolbarPanel>
                <DesignerToolsWidget use={["HISTORY", "CURSOR"]} />
                <ViewToolsWidget
                  use={[
                    "DESIGNABLE",
                    "JSONTREE",
                    // "MARKUP",
                    "PREVIEW",
                  ]}
                />
              </ToolbarPanel>
              <ViewportPanel style={{ height: "100%" }}>
                <ViewPanel type="DESIGNABLE">
                  {() => <ComponentTreeWidget components={components} />}
                </ViewPanel>
                <ViewPanel
                  type="JSONTREE"
                  scrollable={false}
                >
                  {(tree, onChange) => (
                    <SchemaEditorWidget
                      tree={tree}
                      onChange={(props) => {
                        onChange(props);
                      }}
                    />
                  )}
                </ViewPanel>
                <ViewPanel
                  type="MARKUP"
                  scrollable={false}
                >
                  {(tree) => <MarkupSchemaWidget tree={tree} />}
                </ViewPanel>
                <ViewPanel type="PREVIEW">{(tree) => <PreviewWidget tree={tree} />}</ViewPanel>
              </ViewportPanel>
            </WorkspacePanel>
          </Workspace>
          <SettingsPanel title="panels.PropertySettings">
            <SettingsForm />
          </SettingsPanel>
        </StudioPanel>
      </Designer>
    </div>
  );
};

export default FormBuilder;
