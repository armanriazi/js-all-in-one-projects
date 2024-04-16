https://www.thebasement.be/working-with-babel-7-and-webpack/
https://compat-table.github.io/compat-table/es6/


# Node Babel App
This is a sample application showing how to setup babel in your node js(express js) application.

## Setting up
- Fork the repo
- Clone to your local machine using git clone [repo url]
- Run npm install or npm i
- To start server, run the "npm start" command



Remove @babel/polyfill Since core-js is now being used directly for the polyfills, the @babel/polyfill package is being deprecated. You can remove it from your project.

npm uninstall @babel/polyfill

Manually import core-js

If you were importing @babel/polyfill directly in to your files, you should update them with the core-js package. Change

import "@babel/polyfill";

to

import "core-js/stable";
import "regenerator-runtime/runtime";

The core-js/stable point to the stable version of your currently installed core-js-package, be it version 2 or version 3. regenerator-runtime/runtime is for when you are transforming generators.

Now you should be able to use Babel as you did before.




A better way is to use the useBuiltIns-option. This option is a way of telling Babel what kind of polyfilling it should be doing. The possible options are:
useBuiltIns 	Result
false 	Never apply polyfills
entry 	Replace top-level polyfill with individual polyfills
usage 	Add individual polyfills in every file based on usage

By default, the useBuiltIns-option is set to false, so that’s why earlier no pollyfills were applied.