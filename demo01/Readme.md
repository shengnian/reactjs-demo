Webpack
===
## Step 1
Create package.json file in demo01 dir.

## Step 2
Go to the demo01 dir and execute:
```{bash}
npm i webpack --save-dev
```
## Step 3
Wait minute and see package.json like this:
*"devDependencies": {
    "webpack": "^1.12.2"
}*

## Step 4
Structure your project like this:


- /app
    + main.js
    + component.js
- /build
    + bundle.js(automatically created)
    + index.html
- package.json
- webpack.config.js

## Step 5
Creating Webpack Configuration
See the [webpack.config.js](./webpack.config.js "webpack config")
 
## Step 6
Creating [hello.component.js](./app/hello.component.js "hello js") and [main.js](./app/main.js) and [index.html](./build/index.html) 
you can using [html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin) generate index.html file.

## Step 7
You can hit:
```
npm run build
```

Seting up `` webpack-dev-server ``
As a first step hit `` npm i webpack-dev-server --save ``

See the [package.json](./package.json)
```
{
  "scripts": {
    "build": "webpack",
    "dev": "webpack-dev-server --devtool eval --progress --colors --hot --content-base build"
  }
}
```

When you run npm run dev from your terminal it will execute the command stated as a value on the dev property. This is what it does:

1. webpack-dev-server - Starts a web service on localhost:8080
2. devtool eval - Creates source urls for your code. Making you able to pinpoint by filename and line number where any errors are thrown
3. progress - Will show progress of bundling your application
4. colors - Yay, colors in the terminal!
5. content-base build - Points to the output directory configured
To recap, when you run npm run dev this will fire up the webservice, watch for file changes and automatically rebundle your application when any file changes occur. How neat is that!

Go to http://localhost:8080 and you should see something.


