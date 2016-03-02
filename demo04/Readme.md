Optimizing Rebundle
===
You might notice after requiring React JS into your project that the time it takes from a save to a finished rebundle of your application takes more time. In development you ideally want from 200-800 ms rebundle speed, depending on what part of the application you are working on.
> IMPORTANT! This setup a minified, production version of React. As a result you will lose propTypes based type validation!

###Running minified file in development
---
Instead of making Webpack go through React JS and all its dependencies, you can override the behavior in development.

[webpack.config.js](./webpack.config.js)

We do two things in this configuration:

1. Whenever "react" is required in the code it will fetch the minified React JS file instead of going to node_modules

2. Whenever Webpack tries to parse the minified file, we stop it, as it is not necessary

Take a look at [Optimizing development](https://christianalfoni.github.io/react-webpack-cookbook/Optimizing-development) for more information on this.



Flow
===
If you come to JavaScript from other programming languages you are familiar with types. You have types in JavaScript too, but you do not have to specify these types when declaring variables, receiving arguments etc. This is one of the things that makes JavaScript great, but at the same time not so great.

Specifically when working on very large projects with many developers type checking gives stability to your project, much like a good test does. So using Flow is definitely not a requirement. It is for developers who depends on type checking as more of a routine and for the before mentioned large projects with many developers. Webpack makes it easy to include Flow in your workflow.

### Installing flow

+ Have to try this out :-)
+ What about "flowcheck-loader", tried it? https://www.npmjs.com/package/flowcheck-loader (probably works, haven't tried this one yet)
+ https://tryflow.org/

