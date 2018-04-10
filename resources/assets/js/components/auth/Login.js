import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import AuthService from './AuthService';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
const styles = {
    block: {
        maxWidth: 250,
    },
    checkbox: {
        position: 'absolute',
        right: 0,
        left: '230px',
        top: '38px',
        height: '10px',
        width: '10px',
    },
    iConUser: {
        position: 'absolute',
        right: 0,
        left: '230px',
        top: '38px',
    },
    contentInput: {
        width: '220px',
    },
    contentAccount: {
        width: '220px',
    },
    widthLogin : {
        width: '17%',
        minWidth: '270px',
        maxWidth: '17%',
    }
};

class Login extends  Component {
    constructor(props) {
        super(props);
        this.Auth = new AuthService();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit (e) {
        e.preventDefault();
        this.Auth.login(this.state.email, this.state.password).then(res =>{
            location.reload();
        })
        .catch(err =>{
            alert(err);
        });
    }

    handleChange(e) {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                onClick={this.handleSubmit}
            />,
        ];

        return (
            <MuiThemeProvider>
                <div>
                    <Dialog
                        title="Login"
                        actions={actions}
                        modal={true}
                        open={true}
                        contentStyle={styles.widthLogin}
                    >
                        <div style={{position: 'relative', display: 'inline-block'}}>
                            <TextField
                                hintText="example@gmail.com"
                                floatingLabelText="Email"
                                type="text"
                                errorText=""
                                inputStyle={styles.contentAccount}
                                onChange={this.handleChange}
                                name="email"
                            />
                            <AccountCircle
                                style={styles.iConUser}
                            />
                        </div>
                        <br/>
                        <div style={{position: 'relative', display: 'inline-block'}}>
                            <Checkbox
                                style={styles.checkbox}
                                checkedIcon={<Visibility />}
                                uncheckedIcon={<VisibilityOff />}
                            />
                            <TextField
                                hintText="Password"
                                floatingLabelText="Password"
                                type="password"
                                errorText=""
                                inputStyle={styles.contentInput}
                                onChange={this.handleChange}
                                name="password"
                            />
                        </div>
                    </Dialog>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default Login;