/**
 * Created by gqadonis on 7/19/15.
 */
/**
 * Created by gqadonis on 7/3/15.
 */
module.exports = function(grunt) {
  grunt.registerTask('babelBuild', ['clean:es6Build', 'shell:es6To5']);
};
