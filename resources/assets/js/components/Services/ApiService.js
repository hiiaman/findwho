import axiosAPI from "axios";
import AuthService from "../auth/AuthService";
export default class ApiService {
    constructor(domain) {
        this.domain = domain || 'http://localhost:90/api/';// API server domain
        this.Auth = new AuthService();
        this.coreApi = this.coreApi.bind(this);
        this.setHeader = this.setHeader.bind(this);
    }

    coreApi (method, url, data) {
        const headers = this.setHeader(method);

        const domainApi = this.setDomain(url);

        return new Promise( function (resolve, reject) {
            axiosAPI({
                method: method,
                url: domainApi,
                data: data,
                headers: headers
            }).then(function (response) {
                resolve(response);
            }).catch(function(error) {
                if(error.response.status == 422) {
                    reject(error.response);
                } else {
                    reject(error);
                }
            })
        });
    }

    setHeader() {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };

        if(this.Auth.loggedIn()) {
            headers["Authorization"] = "Bearer" + this.Auth.getToken();
        }


        return headers;
    }

    setDomain (url) {
        return this.domain + url;
    }
}