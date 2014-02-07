//Gruntfile.js

module.exports = function(grunt){

	grunt.initConfig({
		meta:{
			/*  MIT license Beer License*/

		},

		connect: {
			server:{
				option:{
					port: 8181,
					hostname: '0.0.0.0',
					base: '.',

				},
			},


		},

		zip:{
			'technodawn.zip': [
			'index.html',
			'td/**',

			]


		},

	});


	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-zip');

	grunt.registerTask('serve','connect');
	grunt.registerTask('package','zip');

};