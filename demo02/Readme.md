Automatic browser refresh
===
>When webpack-dev-server is running it will watch your files for changes. When that happens it rebundles your project and notifies browsers listening to refresh. To trigger this behavior you need to change your index.html file in the ``build/`` folder.

See the [webpack.config.js](./webpack.config.js)


Thats it! Now your application will automatically refresh on file changes.

Default environment
===
In the example above we created our own index.html file to give more freedom and control. It is also possible to run the application from http://localhost:8080/webpack-dev-server/bundle. This will fire up a default index.html file that you do not control. It also fires this file up in an iFrame allowing for a status bar to indicate the status of the rebundling process.

>I discuss an alternative, inline based approach at the Developing with Webpack chapter of SurviveJS - Webpack and React.