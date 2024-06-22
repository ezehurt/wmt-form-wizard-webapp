import {
  FormContextType,
  ObjectFieldTemplateProps,
  RJSFSchema,
  StrictRJSFSchema,
} from "@rjsf/utils"
import React, { useState } from "react"

// Define the props for the HOC
// interface CollapsibleProps {
//   collapsed?: boolean;
//   title: string;
//   properties: ObjectFieldTemplatePropertyType[];
//   onAddClick: unknown;
//   schema: unknown;
//   idSchema: unknown,
//   registry: unknown
// }

interface CollapsibleProps<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  F extends FormContextType = any,
> extends ObjectFieldTemplateProps<T, S, F> {
  collapsed?: boolean // Add your custom property here
}

// Define the types for the wrapped component
type CollapsibleComponentProps = CollapsibleProps & {
  [key: string]: unknown
}

// The simple HOC
const withCollapsible = (
  WrappedComponent: React.ComponentType<CollapsibleComponentProps>,
) => {
  return (props: CollapsibleComponentProps) => {
    const [collapsed, setCollapsed] = useState(props.collapsed || false)
    const isCollapsible = props.isCollapsible || false

    const toggleCollapse = () => {
      setCollapsed(!collapsed)
    }

    return isCollapsible ? (
      <div>
        <button onClick={toggleCollapse}>
          {collapsed ? "Expand" : "Collapse"}
        </button>
        {!collapsed && <WrappedComponent {...props} />}
      </div>
    ) : (
      <WrappedComponent {...props} />
    )
  }
}

export default withCollapsible
