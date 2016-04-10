import React from "react";
import ReactDOM from "react-dom";
import {Table, Column, Cell} from "fixed-data-table";

const rows = [
  ['a1', 'b1', 'c1'],
  ['a2', 'b2', 'c2'],
  ['a3', 'b3', 'c3'],
  // .... and more
];

var Matching  = React.createClass({
  render(){
      console.log(rows.length);
      var tableRows = [];
      rows.forEach(function(r){
        var col = <Column
          header={<Cell>Col 3</Cell>}
          cell={(rows) => (
window.PAC
            <Cell
              isScrolling={true}
              align={props.align}
              Data for column 3: {rows[rowIndex][2]}
            </Cell>
          )}
          width={2000}
        />
        tableRows.push(<div>{r}</div>);
      });
        return(
            <div className="container">
              <div className="row">
                <div className="col-md-12">

                  {tableRows}
                  <Table
                    rowHeight={50}
                    rowsCount={rows.length}
                    width={5000}
                    height={5000}
                    headerHeight={50}>
                    <Column
                      header={<Cell>Col 1</Cell>}
                      cell={<Cell>Column 1 content</Cell>}
                      width={2000}
                    />


                  </Table>

                </div>
              </div>

            </div>
        );
  }

});
module.exports = Matching;
