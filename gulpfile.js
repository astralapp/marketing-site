var gulp = require("gulp");
var notify = require("gulp-notify");
var bourbon = require("node-bourbon");
var elixir = require("laravel-elixir");
require("laravel-elixir-webpack-official");

elixir(function(mix) {
    mix
    .webpack("./assets/js/main.js", "./dist/js/main.bundle.js")
    .sass("./assets/css/main.scss", "./dist/css/main.css", null, { includePaths: bourbon.includePaths, quiet: true})
});
