/*
 * grunt-init-wp-theme
 * http://voceplatforms.com/
 *
 * Copyright (c) 2013 Voce Platforms
 * Licensed under the MIT license.
 */

'use strict';

exports.description = 'Create a WordPress theme boilerplate.';

// Template-specific notes to be displayed before question prompts.
exports.notes = '';

// Template-specific notes to be displayed after question prompts.
exports.after = 'You should now install project dependencies with _npm ' +
  'install_. After that, you may execute project tasks with _grunt_. For ' +
  'more information about installing and configuring Grunt, please see ' +
  'the Getting Started guide:' +
  '\n\n' +
  'http://gruntjs.com/getting-started';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

exports.template = function(grunt, init, done) {
  init.process({}, [
    init.prompt('name'),
    init.prompt('homepage'),
    init.prompt('author_name'),
    init.prompt('author_url'),
    init.prompt('description'),
    init.prompt('version')
  ], function(err, props) {
    props.main = 'Gruntfile.js';
    props.devDependencies = {
      "grunt": "latest",
      "grunt-build": "git://github.com/voceconnect/grunt-build.git#master",
      "grunt-contrib-compass": "latest",
      "grunt-contrib-imagemin": "latest",
      "grunt-contrib-jshint": "latest",
      "grunt-contrib-uglify": "latest"
    };

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);

    // Generate package.json file.
    init.writePackageJSON('package.json', props);

    // All done!
    done();
  });
}
