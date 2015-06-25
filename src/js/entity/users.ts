/// <reference path="../../../typings/app.d.ts" />

export function configure(nga, admin){
	// define an entity mapped by the http://localhost:3000/posts endpoint
    var post = nga.entity('posts');
    admin.addEntity(post);

    // set the list of fields to map in each post view
    post.listView().fields(/* see example below */);
    post.creationView().fields(/* see example below */);
    post.editionView().fields(/* see example below */);
} 
