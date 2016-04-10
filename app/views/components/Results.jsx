import React from 'react';
import {Table, Column, Cell} from 'fixed-data-table';
import "../assets/css/fixed-data-table.min.css";

export default class Results extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            myTableData: [
                {name: 'Ivan'},
                {name: 'Thomas'},
                {name: 'Palma'},
                {name: 'Polo'}
            ],
        };
    }

  render() {
    return (
      <div className="containers">
      <Table

        rowsCount={this.state.myTableData.length}
        rowHeight={50}
        headerHeight={50}
        width={1000}
        height={500}>
        <Column
          header={<Cell>Name</Cell>}
          cell={props => (
              <Cell {...props}>
                  {this.state.myTableData[props.rowIndex].name}
              </Cell>
          )}
          width={200}
        />
      </Table>
      </div>
    );
  }
};
