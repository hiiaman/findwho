import React, {Component} from 'react';
import TableRowUser from './TableRowUser';
import ApiService from '../Services/ApiService';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
} from 'material-ui/Table';

class Index extends Component {
    constructor(props) {
        super(props);
        this.ApiService = new ApiService();
        this.state = {
            dataApis: '',
        }
    }

    componentDidMount () {
        this.ApiService.coreApi('get', 'users').then((response) => {
            this.setState({dataApis: response.data})
        }).catch((error) => {
            alert(error.statusText);
        })
    }

    dataTableRow () {
        if(this.state.dataApis instanceof Array) {
            return this.state.dataApis.map(function(user, key){
                return <TableRowUser user={user} key={key} />;
            })
        }
    }

    render(){
        return (
            <Table>
                <TableHeader displaySelectAll={false}>
                    <TableRow>
                        <TableHeaderColumn>ID</TableHeaderColumn>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        <TableHeaderColumn>Email</TableHeaderColumn>
                        <TableHeaderColumn>Action</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                    {this.dataTableRow()}
                </TableBody>
            </Table>
        )
    }
}

export default Index;