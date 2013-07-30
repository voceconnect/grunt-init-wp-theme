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
exports.after = '';

exports.template = function(grunt, init, done) {
  init.process({}, [
    init.prompt('name'),
    init.prompt('version'),
    init.prompt('grunt_version')
  ], function(err, props) {
    props.main = 'Gruntfile.js';
    props.keywords = ['gruntplugin'];
    props.devDependencies = {
        "grunt-contrib-compass": "latest",
        "grunt-contrib-csslint": "latest",
        "grunt-contrib-cssmin": "latest",
        "grunt-contrib-imagemin": "latest",
        "grunt-contrib-jshint": "latest",
        "grunt-contrib-uglify": "latest",
    };

    props.peerDependencies = {
      'grunt': props.grunt_version,
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