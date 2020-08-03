     --version        output the version number
    Express generator - express -h
    -e, --ejs            add ejs engine support
        --pug            add pug engine support
        --hbs            add handlebars engine support
    -H, --hogan          add hogan.js engine support
    -v, --view <engine>  add view <engine> support (dust|ejs|hbs|hjs|jade|pug|twig|vash) (defaults to jade)
        --no-view        use static html instead of view engine
    -c, --css <engine>   add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain css)
        --git            add .gitignore
    -f, --force          force on non-empty directory
    -h, --help           output usage information

    Transcript:
    Although in this course we'll go through building an application from scratch, it's worth exploring what CLI tools are available to help us get a project started. The Express Application Generator is specifically for this purpose so let's take a look at it. So you can use any terminal you want because we're basically going to create this project and then trash it so let's go ahead and create a new folder on the desktop first. So let's go and create this sample folder here. So let's click on this. Sample. And then getting back to terminal. So you can use also the terminal that's inside of VS Code if you want. This is just as an example and just to show you what Express Generator can do. So the first thing, let's validate where we are. So ls. And we are at the top level of this particular user. So let's go and do a cd Desktop. So to autocomplete the actual name of the directory you want to get to, I do three letters, and then I hit tab. So I also want to get into the actual sample that I just created so I'm going to do this and now I should be in an empty directory. All right, so let's install the Express Generator. So let's do sudo and for those that have admin rights to their system, you don't have to do that, npm install express-generator and let's install globally and you may have to enter your password. And as you can see, I already have Express Generator installed, but for you it should say something like install this many packages. It just updated one for me. Okay. So then what we need to do is let's go ahead and do an express -h. So this is basically going to help us understand what options we have when we create a new Express project. So for example if we did something like express dash dash view equals hbs. This would basically tell the Express Generator that we want this specific handlebar view. So if you take a look at all the views that are available, there's hogan, there's handlebars, there's pug, ejs, and then you see all the options here, so when you do the dash dash view, you see what are the options that you can create. We could also do something like dash dash css equals compass. So basically these are the options for your style sheet engine or preprocessor if you want. So I'm not going to use that 'cause the default is css and that's exactly what I want. And then, you hit return. Let's go back to our folder here. So we have all these things created for us automatically. And let's go and basically do an npm install. So the first thing we'll do is npm install and it will install all the dependencies that the package .json has on that particular project. So let's get out of this terminal. So if you were in VS Code stay there. We're going to go in VS Code now. I'm going to open Explorer, then click on Open Folder. And then let's go to the Desktop and click on sample and open that one. So before I actually continue and actually run this project I want to show what comes with a generated project from the Express Generator. So if you take a look, we actually specify our views to be handlebars. So you have an index and a layout. So you have all the pieces to have a full project generated for you so you see you have this stylesheet that's created for you and it's in the stylesheets so if we take a look at our public stylesheets we have this stylesheet that's created for you and so on and so forth. So all this stuff is created for you so the app.js is basically the index.js file that we'll create momentarily and this has all the, basically, calls to all the dependencies and packages that you need when you create a project with views, with routes, and all that Express offers. So this is primarily what it creates for you so you could actually run this and have a full project with everything that you need with the Express Generator. So let's go ahead and do one last thing before we end this video and actually start the project. So let's go and bring up the View Integrated Terminal. And then do an npm start. And this should be in the localhost 3000. Let's bring up a brand new browser window and go to localhost:3000. And here's your Express project. Nothing much to it but it still has views and you could continue building from that project generated from the Express Generator so that's pretty cool. So there you go, you have an Express application built in less than five minutes with views and everything you need. So let's move on.