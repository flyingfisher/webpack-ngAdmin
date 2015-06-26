/// <reference path="../../typings/app.d.ts" />

angular.module('controllers',[]);
requireDir("./controller");
angular.module('services',[]);
requireDir("./service");
angular.module('directives',[]);
requireDir("./directive");

var app = angular.module('app', ['ng-admin','controllers','services','directives']);

app.config((NgAdminConfigurationProvider)=> {
    var nga = NgAdminConfigurationProvider;
    // set the main API endpoint for this admin
    var admin = nga.application('My backend')
        .baseApiUrl('http://localhost:3000/');

    requireDir("./entity",(it)=>{
        it.configure(nga, admin);
    })

    nga.configure(admin);
});

function requireDir(path,callback?){
    var req = require.context(path, false, /\.ts$/);
    req.keys().forEach((it)=>{
        if(callback)
            callback(req(it));
        else
            req(it);            
    });
}