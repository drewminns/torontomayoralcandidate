var path = require('path');

var stylesheetsDir = 'styles/';
var components = 'app/components';

module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		bowercopy: {
			options: {
				srcPrefix: 'bower_components'
			},
			scripts: {
				options: {
					destPrefix: 'app/scripts/vendor'
				},
				files: {
					'jquery/jquery.min.js': 'jquery/jquery.min.js',
					'modernizr/modernizr.js': 'modernizr/modernizr.js',
					'angular/angular.min.js': 'angular/angular.min.js',
					'angular-route/angular-route.min.js': 'angular-route/angular-route.min.js'
				}
			}
		},
		jade: {
			html: {
				files: {
					'app/': ['templates/*.jade']
				},
				options: {
					client: false
				}
			}
		},
		connect: {
			server: {
				options: {
					port: 9001,
					base: 'app/'
				}
			}
		},
		concat: {
			js: {
				options: {
					separator: ';'
				},
				src: [
					'javascript/*.js'
				],
				dest: 'app/scripts/main.min.js'
			},
		},
		uglify: {
			options: {
				mangle: false
			},
			js: {
				files: {
					'app/scripts/main.min.js': ['app/scripts/main.min.js']
				}
			}
		},
		sass: {                              // Task
			dist: {                            // Target
				options: {                       // Target options
					style: 'expanded'
				},
				files: {                         // Dictionary of files
					'app/css/main.css': stylesheetsDir + 'main.scss'       // 'destination': 'source'
				}
			}
		},
		autoprefixer: {
			options: {
				browsers: ['last 5 version', 'ie 7', 'ie 8', 'ie 9']
			},
			no_dest: {
				src: 'app/css/main.css' // globbing is also possible here
			}
		},
		watch: {
			js: {
				files: ['javascript/*.js'],
				tasks: ['concat:js', 'uglify:js'],
				options: {
					livereload: true
				}
			},
			css: {
				files: ['**/*.scss'],
				tasks: ['sass', 'autoprefixer'],
				options: {
					livereload: true
				}
			},
			jade: {
				files: ['templates/*.jade'],
				tasks: ['jade'],
				options: {
					livereload: true
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-bowercopy');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-jade');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-uncss');
	// Run the server and watch for file changes
	grunt.registerTask('default', ['bowercopy', 'jade', 'connect', 'concat', 'uglify', 'sass', 'autoprefixer', 'watch']);
};