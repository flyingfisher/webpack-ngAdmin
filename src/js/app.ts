/// <reference path="../../typings/app.d.ts" />

angular.module('controllers',[]);
requireController();
angular.module('services',[]);
requireService();
angular.module('directives',[]);
requireDirective();

var app = angular.module('app', ['ng-admin','controllers','services','directives']);

app.config((NgAdminConfigurationProvider)=> {
    var nga = NgAdminConfigurationProvider;
    // set the main API endpoint for this admin
    var admin = nga.application('test')
        .baseApiUrl('http://localhost:3000');

    requireEntity(nga, admin);

    nga.configure(admin);
});

require("./app.router.ts");

function requireController(){
    // require.context is a trick of webpack, this is the only way to use it
    // 不要合并函数，这里只能这么用，这个函数是webpack解析的，不是运行时解析的。
    var req = require.context("./controller", false, /\.ts$/);
    req.keys().forEach((it)=>req(it));
}

function requireService(){
    var req = require.context("./service", false, /\.ts$/);
    req.keys().forEach((it)=>req(it));
}

function requireDirective(){
    var req = require.context("./directive", false, /\.ts$/);
    req.keys().forEach((it)=>req(it));
}

function requireEntity(nga, admin){
    var req = require.context("./entity", false, /\.ts$/);
    req.keys().forEach((it)=>req(it).configure(nga, admin));
}