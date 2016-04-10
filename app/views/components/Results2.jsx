import React from 'react';
import SortableTable from 'react-sortable-table';

export default class Resultado extends Component {
    constructor(){
        super()
        this.state = {
            data: [
                { id: 3, name: "Satoshi Yamamoto", class: "B" },
                { id: 1, name: "Taro Tanak", class: "A" },
                { id: 2, name: "Ken Asada", class: "A" },
                { id: 4, name: "Masaru Tokunaga", class: "C" }
            ]
        };
    }

    rende() {
        const = columns = [
            {
                header: "ID",
                key: "id",
                headerStyle: { fontSize: "15px", backgroundColor: "#FFDAB9", width: "100px" },
                dataStyle: { fontSize: "15px", backgroundColor: "#FFDAB9"}
            },
            {
                header: "NAME",
                key: "name",
                headerStyle: { fontSize: "15px" },
            }
            {
                header: "CLASS",
                key: "class",
                headerStyle: { fontSize: "15px" },
                sortable: false
            }
        ];
        const style = {
            backgroundColor: "#eee"
    };

    const iconStyle = {
      color: "#aaa",
      paddingLeft: "5px",
      paddingRight: "5px"
    };

    return (
        <SortableTable
        data={this.state.data}
        columns={columns}
        style={style}
        iconStyle={iconStyle} />
        );
    }
};
