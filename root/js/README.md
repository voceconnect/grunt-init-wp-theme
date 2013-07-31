## Usage of Uglifier

Keep all JavaScript files installed in this directory /%THEME_ROOT%/js and the Afterburner Grunt Scaffolding Tool will automatically minify and concatenate each of the files and store them in a single file named {package-name}.min.js in /%THEME_ROOT%/js/

Note {package-name} is whatever you set the project name as when you initialized the project (i.e. issued **grunt-init wp-theme** on the command line)

If you need to customize any of the uglify task, edit the **uglify** object's properties in the Gruntfile.js file in the root. See the [github plugin page](https://github.com/gruntjs/grunt-contrib-uglify) for customization options.


## Usage of JSHint

Keep all JavaScript files installed in this directory /%THEME_ROOT%/js and the Afterburner Grunt Scaffolding Tool will error check your JS files and fail if any errors are found.

If you need to customize any of the JSHint task, edit the **jshint** object's properties in the Gruntfile.js file in the root. See the [github plugin page](https://github.com/gruntjs/grunt-contrib-jshint) for customization options.