const gulp        = require("gulp");

const browserSync = require("browser-sync").create();
const reload      = browserSync.reload;

function watch() {
  browserSync.init({
    proxy: "restaurant/public/",
    notify: false
  });

  browserSync.watch("**/*.html").on("change", reload);
  browserSync.watch("**/*.css").on("change", reload);
  browserSync.watch("**/*.js").on("change", reload);
}

exports.watch = watch;