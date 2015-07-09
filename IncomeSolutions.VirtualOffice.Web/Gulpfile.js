var gulp = require('gulp');
var jspm = require('jspm');

gulp.task('default', function () {
    // place code for your default task here
});

gulp.task("bundle-libs", function () {
    var traceurBundle = ["traceur", "traceur-runtime"].join(" + ");
    return jspm.bundle(traceurBundle, "wwwroot/traceur.js", { inject: false, minify: false, sourceMaps: true }).then(function () {
            var aureliaBundle = [
                'aurelia-bootstrapper',
                "github:aurelia/dependency-injection@0.9.0",
                'aurelia-framework',
                'github:aurelia/router@0.10.1',
                'github:aurelia/templating@0.13.2',
                'github:aurelia/history@0.6.0',
                'github:aurelia/history-browser@0.6.1',
                'github:aurelia/templating-router@0.14.0',
                'github:aurelia/templating-resources@0.13.0',
                'github:aurelia/templating-binding@0.13.0',
                'github:aurelia/binding@0.8.1',
                'github:aurelia/loader-default@0.9.0',
                'github:aurelia/logging-console@0.6.0'
                //'aurelia-http-client',
                //'github:aurelia/animator-css@0.13.0',
            ].join(" + ");
            return jspm.bundle(aureliaBundle, "wwwroot/libs/aurelia.js", { inject: false, minify: false, sourceMaps: true });
        });
});