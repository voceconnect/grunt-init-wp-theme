## Usage of Compass

Keep all of your Sass files in the /%THEME_ROOT%/sass directory. Keep all of your scss in /%THEME_ROOT%/scss/style.scss or files that are explicitly included in style.scss. To prepare an additional scss file to be imported, create the scss files in the Sass directory and make sure they begin with a trailing _ (e.g._additional.scss).To add the actual import directive add the names of the .scss files (you do not need to include the scss extension) be sure to include a trailing underscore before the file name, for example:


    @import("_additional");
    @import("_additional2");
    @import("grid/_mygrid");

**Be sure to add these directives after the theme description boilerplate in style.scss**
    
The task will pre-process the style.scss file and create a single style.css file in the /%THEME_ROOT%/ that will be your main css file for your theme. You will just need to enqueue the theme's style.css file in your theme (e.g. theme functions.php file).

Note: If you include non-underscored files in the import directives it will compile that file to a css file and store it in the /%THEME_ROOT%/ and you will need to enqueue those files separately in your theme (e.g. theme functions.php file).

If you need to customize any of the Compass task, edit the **compass** object's properties in the Gruntfile.js file in the root. See the [github plugin page](https://github.com/gruntjs/grunt-contrib-compass) for customization options.