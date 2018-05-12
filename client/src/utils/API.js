import axios from "axios";


//methods for interacting with API Auth routes
export default {

    // Sends user data contact form
    sendForm: function (formData) {
        return axios.post("/api/contact", formData);
    },

    //Sign up
    login: function (userData) {
        return axios.post("/auth/login", userData);
    },

    signUp: function (userData) {
        return axios.post("/auth/signUp", userData);
    },

    dashboard: function (token) {
        console.log('hit api')
        return axios.get("/api/dashboard", {
            headers: {
                Authorization: `bearer ${token}`
            }}
        )
        //return axios.get("/api/dashboard", userData);
    }
}