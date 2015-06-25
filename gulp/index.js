var gulp =require("gulp");
var fs = require('fs');
var tasks = fs.readdirSync('./gulp/tasks/');

tasks.forEach(function(task) {
    if (task.indexOf(".")===0) return; //exclude hidden file for mac, etc. .DS_store
    require('./tasks/' + task);
});