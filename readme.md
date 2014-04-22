# Strongarm Starter Template

Created by Drew Minns
[drewminns.com](drewminns.com)
[@drewisthe](http://twitter.com/drewisthe)

## Main Structure

	- app
		- css
			-fonts
			main.css
			normalize.css
		- images
			favicon.ico
		- scripts
			- vendor
				- jquery
				- modernizr
			main.min.js
		index.html
	- javascript
		- app.js
	- styles
		main.scss
		_mixins.scss
		_functions.scss
		_colours.scss
	- templates
		- includes
			dependancies.jade
			header.jade
		index.jade
	.bowerrc
	bower.json
	Gruntfile.js
	package.json
	readme.md

####Strongarm

Starting off from scratch when building a web app is the best. But setting it up is painful. Downloading dependencies, including fonts, etc and you end up with a bloated file for prep.

Strongarm is here to alleviate those problems for you. Automating, just about everything that's needed.

###Tools
If you don't already know the tools listed below, I suggest you take a quick read on each so you're not losing your mind.
- Grunt [http://gruntjs.com/](http://gruntjs.com/)
- Bower [http://bower.io/](http://bower.io/)
- Jade [http://jade-lang.com/](http://jade-lang.com/)
- SCSS [http://sass-lang.com/](http://sass-lang.com/)
- Semantic GS [http://semantic.gs/](http://semantic.gs/)

###What it does
Ok, picture this. You're starting a new web app and you want to be quick about it.

- Open up that sweet terminal window
- Make a new directory
        mkdir new-project
- Dump the contents of the Strongarm folder into your new directory and cd into it.
- Install NodeJS
    - [http://nodejs.org/](http://nodejs.org/)
- Install Bower
        npm install -g bower
- Install Bower Dependancies
        bower install
- Install Grunt
       npm install -g grunt
- Install Grunt Dependancies
        npm install
- Run Grunt
        grunt
- View the app in your browser at localhost: 9001

##Cool, but what's happening?
Ok, so here's the deal. I've given you a good, clean starting tool to build with. You write your HTML as Jade, CSS as SCSS and JS normally. Grunt compiles them all into a functional, deployable app in the 'App' folder.

###Jade
For every page you need in your app, copy the main structure of index.html and go from there. the name that you give the file will be outputted in **app/*.html**

###SCSS
Work with the beautiful SCSS provided to alleviate stresses. 

####Auto Prefixr
That's right, don't waste your time writing -webkit this or -moz that. Grunt will do that for you.

####Grid
Semantic GS is included so using a grid is as simple as defining ``@include column(8);`` on the selector to acheive an element that spans eight columns.

####Fonts
To include fonts, either import them via Typekit, Google Web Fonts or whatever you'd like. Or be a nice guy and embed them directly in your project. Convert those files either using [http://fontprep.com/](http://fontprep.com/) or [http://www.fontsquirrel.com/tools/webfont-generator](http://www.fontsquirrel.com/tools/webfont-generator) and toss the resulting files in app/css/fonts. Then, to import the fonts use:

        @include importfont('quicksandbold', 'fonts/quicksand-bold-webfont', 700);
        
        // Which outputs
        @font-face {
            font-family: "quicksandbold";
            src: url("fonts/quicksand-bold-webfont.eot");
            src: url("fonts/quicksand-bold-webfont.eot?#iefix") format("embedded-opentype"), url("fonts/quicksand-bold-webfont.woff") format("woff"), url("fonts/quicksand-bold-webfont.ttf") format("truetype"), url("fonts/quicksand-bold-webfont.svg#quicksandbold") format("svg");
            font-weight: 700;
            font-style: normal;
            font-stretch: normal;
        }
        
To get those pesky font heights and line sizes figured out, use the font-size mixin

        h1 {
          @include font-size(36px);
        }
        
        // Which outputs
        h1 {
          font-size: 36px;
          font-size: 2.25em;
          line-height: 1.55676em;
        }
        
Where are those sizes coming from? Well it's using a mathmagical function to get that size, but at the top of main.scss, it asks for you to provide values for the variables of $basefontsize and $baselineheight. Using those, it creates all that's needed.

####UnCSS
Are you awful at writing CSS, not using it and forgetting to erase it? UnCSS will scour your HTML files and pull out any unused CSS, ensuring that you have the smallest filesize possible.

###Javascript
Ok, so you're cool with what's included (jQuery and Modernizr), but you want something else. Bower to the rescue! 

Bower is a dependancy manager. See that folder called **bower_components**? That's where the dependancies hangout. Want a new one? just do ``bower search [name]``. Want to install it? You guessed it, ``bower install [name]``.

Now, it's not as simple as just using that command, Bower installs A LOT in those files and you just want that one file. Grunt will pull that file you need and copy it directly into your **app/scripts/vendor** folder so on deploy, it's just that file you need. Just use bower to install what you need, open up **Gruntfile.js**, and on line 19-20, you can see examples of how to copy files from **bower_components** to **app/script/vendor**. Pretty cool huh?

One more thing to do, update the loading of those scripts. Just go into **templates/includes/dependancies.jade** and update the path there. Tada!

##Finally
If you have any questions, bug me here [@drewisthe](http://twitter.com/drewisthe). If you're totally confused about what's happening, I suggest you take a read through of all those tools above.






