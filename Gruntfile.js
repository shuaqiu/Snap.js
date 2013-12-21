module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        cssmin: {
            css: {
                files: {
                    "snap.min.css": ["snap.css"]
                }
            }
        },

        uglify: {
            js: {
                files: {
                    "snap.min.js": ["snap.js"]
                }
            }
        },

        watch: {
            cssmin: {
                files: ["*.css"],
                tasks: ["cssmin"]
            },
            uglify: {
                files: ["*.js"],
                tasks: ["uglify"]
            }
        }
    });

    // Load the plugin that provides task.
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");

    // Default task(s).
    grunt.registerTask("default", ["cssmin", "uglify"]);

};
