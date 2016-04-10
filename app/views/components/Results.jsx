import React from 'react';
import ReactDOM from 'react-dom';
import {Table, Column, Cell} from 'fixed-data-table';

const rows = [
    ['a1', 'b1', 'c1'],
    ['a2', 'b2', 'c2'],
    ['a3', 'b3', 'c3']
];

var Results = React.createClass({
    getInitialState(){
        return {
            lista: rows
        }
    },
    render(){
        var dataList = this.state.dataList;
        return(
            <div>
            Hola amigos

            <Table
              rowHeight={50}
              headerHeight={50}
              rowsCount={dataList.getSize()}
              width={1000}
              height={500}
              >
              <Column
                header={<Cell>First Name</Cell>}
                cell={<LinkCell data={dataList} col="firstName" />}
                fixed={true}
                width={100}
              />
              <Column
                header={<Cell>Last Name</Cell>}
                cell={<TextCell data={dataList} col="lastName" />}
                fixed={true}
                width={100}
              />
              <Column
                header={<Cell>City</Cell>}
                cell={<TextCell data={dataList} col="city" />}
                width={100}
              />

            </Table>
            </div>
        );
    }
})
