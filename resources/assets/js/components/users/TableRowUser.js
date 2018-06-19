import React, {Component} from  'react';
import {
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

export default class TableRowUser extends Component {
    render () {
        return (
            <TableRow>
                <TableRowColumn>
                    {this.props.user.id}
                </TableRowColumn>
                <TableRowColumn>
                    {this.props.user.name}
                </TableRowColumn>
                <TableRowColumn>
                    {this.props.user.email}
                </TableRowColumn>
                <TableRowColumn>
                </TableRowColumn>
            </TableRow>
        );
    };
}