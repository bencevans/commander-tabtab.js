#taptap-commander

Tab/Auto Completion for Commander.js CLIs.


##Example

Look at the code of the Example App @ [/examples/exampleapp](https://github.com/bencevans/commander-tabtab/blob/master/example/exampleapp)

If installed properly and you entered `exampleapp` and striked tab you would get…

	# exampleapp 
	hello     helllllooooooo     world
	
Then if you were to enter `exampleapp he` and striked tab you would get…

	# exampleapp hello
	hello     helllllooooooo  
	
Or if you were to enter `exampleapp w` and striked tab you would get…

	# exampleapp world
	
Simple!


##Installation

*Sorry wording isn't brilliant. If you need a hand drop me a note. @bencevans on [Twitter](http://twitter.com/bencevans) and [GitHub](http://github.com/bencevans). You can find my email on my GitHub profile.*

####Codebase

1. Require taptap-commander. `commanderTabTab = require('taptap-commander');`
2. Just before `program.parse(argv);` enter `commanderTabTab.init(program, 'NAME OF YOUR BIN/CLI FILE/APP');`

####In Terminal

* Install your app using NPM `npm install -g .` (This adds your app to your shell's PATH)

If you would like to install completion everywhere rather than just in the current shell enter this line.

* Add completion helper to ~/.bashrc (or ~/.zshrc) `APPNAME completion >> ~/.bashrc`

else if you just want to try out with it enabled in the current shell enter this line.

* Add completion to current shell `source <(pkgname completion)`

Done.

##In The Wild
[npunch](https://github.com/bencevans/npunch) - NodeJS WebApp Development Hostbox Thing.

[Add Yours](https://github.com/bencevans/commander-tabtab/issues/new?title=[PROJECT%20NAME]+We're+using+this+project!&body=[LINK%20TO%20PROJECT])