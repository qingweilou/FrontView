<template>
    <div class="container">
        <div class="row">
            <p> Log In</p>
        </div>
        <div class="row">
        <div class="form-group col-sm-6 col-sm-offset-3">
            <input type="text" class="form-control" placeholder="Enter your phone number" v-model="cred.phone">
        </div>
        </div>
        <div class="row">
         <div class="form-group col-sm-6 col-sm-offset-3">
            <input type="password" class="form-control" placeholder="Enter your password" v-model="cred.password">
        </div>
        </div>
        <div class="row">
        <div class="alert" v-if="error">
            {{error}}
        </div>
        </div>
        <div class="row col-sm-6 col-sm-offset-3">
            <button class="btn btn-primary" @click="submit()">Login</button>
        </div>
    <div>
</template>

<script>
import Auth from '../stubs/Auth.js'
import {router} from '../index.js'

export default {
    data() {
        return {
            cred: {
                phone: '',
                password: ''
            },
            error:''
        }
    },

    methods: {
        submit() {
            var app = this
            Auth.login(app.cred).then(function(data) {
                router.push("/Home");      
            }, function(err) {
                app.error="failed login"
            }).catch(function(err) {
                app.error=err.body;
            });
        }
    }
}
</script>

<style scoped>
.container {
    font-size: 2em;
    text-align: center;
    min-height: 736px;
    background-image: url('../../img/ocean.jpg')
}

.container p {
    color: white;
}
.alert {
    font-size: 0.7em;
    margin-bottom: 0px;
    margin-top: 0px;
    color: red;
}
</style>