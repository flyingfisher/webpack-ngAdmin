/**
 * Created by wanglei on 2015/5/19.
 */

var gulp=require('gulp');
var gzip=require('gulp-gzip');

function compress(folder,extension){
    gulp.src(folder+"/*."+extension)
        .pipe(gzip())
        .pipe(gulp.dest(folder));
}

gulp.task('compress',function(){
    return compress("www", "js");
});
