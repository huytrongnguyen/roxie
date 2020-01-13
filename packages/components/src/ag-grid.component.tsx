import React, { PureComponent } from 'react';
import { ColDef } from 'ag-grid-community';
import { AgGridReact, AgGridReactProps, AgGridColumn } from 'ag-grid-react';

interface AgGridProps extends AgGridReactProps {
  style?: any;
  className?: string;
  action?: { [key:string]: (...params: any[]) => void };
}

export class AgGrid extends PureComponent<AgGridProps, any> {
  constructor(props: AgGridProps) {
    super(props);
    this.state = { context: { componentParent: this } };
  }

  render() {
    const { className = '', style = {} } = this.props;

    return <section className={`ag-theme-balham ${className}`} style={style}>
      <AgGridReact animateRows rowSelection="multiple"
          defaultColDef={agConfig.defaultColDef}
          components={agConfig.components} context={this.state.context}
          {...this.props} />
    </section>
  }
}

export function GridColumn(props: ColDef) {
  return <AgGridColumn {...props} />;
}

export const agConfig = {
  defaultColDef: {
    width: 125,
    resizable: true,
    filter: true,
    sortable: true,
  },
  components: {
    textFormat: ({ value }) => value,
  },
  checkColumn: {
    checkboxSelection: true,
    headerCheckboxSelection: true,
    headerCheckboxSelectionFilteredOnly: true,
  },
  numberColumn: {
    type: 'numericColumn',
    filter: 'agNumberColumnFilter',
    cellRenderer: 'numericFormat',
  },
}
