/// <reference path="../../typings/app.d.ts" />

var app = angular.module('myApp', ['ng-admin']);

app.config((NgAdminConfigurationProvider)=> {
    var nga = NgAdminConfigurationProvider;
    // set the main API endpoint for this admin
    var admin = nga.application('My backend')
        .baseApiUrl('http://localhost:3000/');

    var req = require.context("./entity", false, /\.ts$/);
    req.keys().forEach((it)=>{
        req(it).configure(nga,admin);
    });

    nga.configure(admin);
});