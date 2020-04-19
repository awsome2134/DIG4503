import React from "react";

class TableOne extends React.Component{
    render(){
        console.log(this.props.table);
        return(
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.table.map((v, index) => {
                           return(
                                <tr key={index}>
                                    <td>{v.title}</td>
                                    <td>{v.year}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
        );
    }
}

export default TableOne;