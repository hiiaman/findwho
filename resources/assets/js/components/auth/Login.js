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
import ApiService from "../Services/ApiService";
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
        width: '10px'
    },
    iConUser: {
        position: 'absolute',
        right: 0,
        left: '230px',
        top: '38px'
    },
    contentInput: {
        width: '220px'
    },
    contentAccount: {
        width: '220px'
    },
    widthLogin : {
        width: '17%',
        minWidth: '270px',
        maxWidth: '17%'
    },

    btn : {
        width: "200px",
        padding: "12px",
        border: "none",
        borderRadius: "4px",
        margin: "5px 0",
        opacity: "0.85",
        display: "inline-block",
        fontSize: "17px",
        lineHeight: "20px",
        textDecoration: "none",
        hover: {
            opacity: "1",
        },
    },
    fb :{
        textAlign: "left",
        width: "100%",
        padding: "12px",
        border: "none",
        borderRadius: "4px",
        margin: "5px 0",
        opacity: "0.85",
        display: "inline-block",
        fontSize: "17px",
        lineHeight: "20px",
        textDecoration: "none",
        backgroundColor: "#3B5998",
        noWrap: "true",
        color: "white"
    },

    twitter :{
        textAlign: "left",
        width: "100%",
        padding: "12px",
        border: "none",
        borderRadius: "4px",
        margin: "5px 0",
        opacity: "0.85",
        display: "inline-block",
        fontSize: "17px",
        lineHeight: "20px",
        textDecoration: "none",
        backgroundColor: "#55ACEE",
        color: "white"
    },

    google : {
        textAlign: "left",
        width: "100%",
        padding: "12px",
        border: "none",
        borderRadius: "4px",
        margin: "5px 0",
        opacity: "0.85",
        display: "inline-block",
        fontSize: "17px",
        lineHeight: "20px",
        textDecoration: "none",
        backgroundColor: "#dd4b39",
        color: "white"
    },

    col : {
        width: "50%",
        margin: "auto",
        padding: "0 50px",
        marginTop: "0 50px",
}
};

class Login extends  Component {
    constructor(props) {
        super(props);
        this.Auth = new AuthService();
        this.ApiService = new ApiService();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCheck  = this.handleCheck.bind(this);
        this.state = {
            errorUsername: "",
            errorPassword: "",
            hiddenPassword: "password",
        }
    };

    handleSubmit (e) {
        e.preventDefault();
        const dataLogin = {
            username : this.state.email,
            password : this.state.password,
        };
        this.ApiService.coreApi("post", "login", dataLogin).then((response) => {
            this.Auth.setToken(response.data.access_token);
            window.location.replace("/");
        }).catch((error) => {
            if(error.status == 422) {
                this.setState({
                    errorUsername: error.data.errors.username['0'],
                    errorPassword: error.data.errors.password['0'],
                });
            } else {
                alert(error.response.statusText)
            }
        });
    }

    handleChange(e) {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    handleCheck(e) {
        if (this.state.hiddenPassword === "password") {
            this.setState(
                {
                    hiddenPassword: "text"
                }
            )
        } else {
            this.setState(
                {
                    hiddenPassword: "password"
                }
            )
        }

    }

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
            />,
            <FlatButton
                label="Login"
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
                                errorText={this.state.errorUsername}
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
                                onCheck={this.handleCheck}
                            />
                            <TextField
                                hintText="Password"
                                floatingLabelText="Password"
                                type={this.state.hiddenPassword}
                                errorText={this.state.errorPassword}
                                inputStyle={styles.contentInput}
                                onChange={this.handleChange}
                                name="password"
                            />
                        </div>
                        <div className={"col"}>
                            <a href="#"  style={styles.fb}>
                                <i className={"fa fa-facebook fa-fw"}></i> Login with Facebook
                            </a>
                            <a href="#" className={"btn"} style={styles.twitter}>
                                <i className={"fa fa-twitter fa-fw"}></i> Login with Twitter
                            </a>
                            <a href="#" className={"btn"} style={styles.google}>
                                <i className={"fa fa-google fa-fw"}></i> Login with Google+
                            </a>
                        </div>
                    </Dialog>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default Login;