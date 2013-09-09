module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    clean: {
	    style: ['styleguide']
    },
    /*
copy: {
	    styleguide: {
		    files: [
		    	{ src: ['sass/styleguide.md'], dest: 'css/styleguide.md' }
			]
	    }
    }, 
*/
    sass: {
	    development: {
		    options: {
			    style: 'expand'
		    },
		    files: {
			    'css/style.docs.css': 'css-application/themes/mindmixer/mindmixer.scss'
		    }
	    }
    },
    shell: {
	    styleguide: {
		    //command: 'styledocco -n "My Project" --preprocessor "scss" --include css/style.docs.css css-framework/components/buttons/basic.scss'
		    command: 'kss-node css styleguide --template kss-node-template-master/template --css css/style.docs.css'
	    }
    }
	/*
styleguide: {
	
	    dist: {
	
	        options: {
	
	            framework: {
	                name: 'styledocco',
	            },
	            name: 'mindmixer',
	            include: 'css/style.docs.css',
	
	        },
			files: {
	            'styleguide': 'css/style.docs.css'
	        }
	
	    }
	
	}
*/
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-styleguide');
  grunt.loadNpmTasks('grunt-shell');

  // Default task(s).
  grunt.registerTask('default', ['clean', 'sass', 'shell']);

};