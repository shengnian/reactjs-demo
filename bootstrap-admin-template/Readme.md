ERROR in ./src/components/App/App.js
Module build failed: SyntaxError: /src/components/App/App.js: Unexpected token (11:0)
   9 | import Footer from '../Footer';
  10 |
> 11 | @withContext
     | ^
  12 | @withStyles(styles)
  
  
It should read settings from the .babelrc file... where stage: 0 means that es7.decorators are supported.

@Anenth you can try to replace babel-loader with babel-loader?stage=0 on this line to check if it makes any difference:
