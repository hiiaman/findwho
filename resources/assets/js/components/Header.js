import React, {Component}  from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router-dom';

class Header extends  Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: false};
        this.handleToggle = this.handleToggle.bind(this)
        this.handleClose = this.handleClose.bind(this)

    };

    handleToggle() {
        this.setState({isToggleOn: !this.state.isToggleOn});
    }

    handleClose() {
        this.setState({isToggleOn: false})
    };

    render()
    {
        return (
            <div>
                <AppBar
                    title="Title"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonClick={this.handleToggle}
                />
                <Drawer
                    docked={false}
                    open={this.state.isToggleOn}
                    onRequestChange={() => this.setState({isToggleOn: !this.state.isToggleOn})}
                >
                    <AppBar title={"Find Who"} onLeftIconButtonClick={this.handleClose} />
                    <div>
                        <MenuItem onClick={this.handleClose} containerElement={<Link to="/" />}>Home</MenuItem>
                        <MenuItem onClick={this.handleClose} containerElement={<Link to="/users" />}>User</MenuItem>
                    </div>
                </Drawer>
            </div>
        );
    }
}

export default Header;