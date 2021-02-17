<!-- SCSS Path and commands -->

$ npm run scss
"scss": "node-sass --watch dev/scss -o dist/redx/html/css",

<!--Browser Sync Path and Server -->

$ npm run start
"start": "browser-sync start --server \"dist/redx/html\" --files \"dist/redx/html/**\""