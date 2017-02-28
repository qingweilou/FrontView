import App from '../index.js'

export default {
    user: {
        authenticated: false
    },

    login(creds) {
        App.$http.headers.common['Content-Type'] = 'Application/json';
    
        console.log(JSON.stringify(creds))
        var app = this
        return App.$http.post('http://localhost:3000/login', creds)
            .then(function(data){
                localStorage.setItem('id_token', data.name);
                app.user.authenticated = true;
                var p = new Promise(function(resolve, reject)
                {
                    resolve(data);
                });
                return p;
            });
    } ,

    checkAuth() {
        var jwt = localStorage.getItem('id_token')
        if(jwt) {
            this.user.authenticated = true
        }
        else {
            this.user.authenticated = false      
        }
  },
}