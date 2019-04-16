const gulp = require("gulp");
const sass = require("gulp-sass");
const babel = require("gulp-babel");
const jsMin = require("gulp-uglify");
const htmlMin = require("gulp-htmlmin");
const cssMin = require("gulp-clean-css");
const webserver = require("gulp-webserver");
gulp.task("devCss", () => {
    return gulp.src("./src/public/stylesheets/**/*.scss")
        .pipe(sass())
        .pipe(cssMin)
        .pipe(gulp.dest("./src/public/css"))
        .pipe(gulp.dest("build/css"))
})
gulp.task("html", () => {
    return gulp.src("./src/public/**/*.html")
        .pipe(htmlMin())
        .pipe(gulp.dest("build"))
})

gulp.task("watching", () => {
    return gulp.watch("./src/public/stylesheets/**/*.scss", gulp.series("devCss"));

})
gulp.task("default", gulp.series("devCss", "watching"))