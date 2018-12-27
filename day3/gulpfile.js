const gulp = require('gulp');
const server = require('gulp-webserver');

//起静态页面服务
gulp.task('page',()=>{
    return gulp.src('.')
    .pipe(server({
        port:8080,
        fallback:'promise.html',
        open:true
    }))
})

gulp.task('data',()=>{
    return gulp.src('.')
    .pipe(server({
        port:8081,
        middleware(req,res){
            res.writeHead(200,{
                'Access-Control-Allow-Origin':'*'
            })
            res.end(JSON.stringify([{
                img:"http://172.16.10.119:8080/bwie/images/image/banner1.png"
            },{
                img:"http://172.16.10.119:8080/bwie/images/image/banner1.png"
            }]))
        }
    }))
})

gulp.task('default',gulp.series('page','data'));