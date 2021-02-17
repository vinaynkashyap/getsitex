package.json

{
"name": "code",
"version": "1.0.0",
"main": "index.js",
"scripts": {
"scss": "node-sass --watch dev/scss -o dist/redx/css",
"sync": "browser-sync start --server \"dist/redx/\" --files \"dist/redx/**\"",
"rds": "node-sass --watch dev/scss -o dist/redx-docs/css",
"rdb": "browser-sync start --server \"dist/redx-docs/\" --files \"dist/redx-docs/**\"",

    "gs": "node-sass --watch dev/scss -o dist/graphitivity/css",
    "gb": "browser-sync start --server \"dist/graphitivity/\" --files \"dist/graphitivity/**\"",

    "uis": "node-sass --watch dev/scss -o dist/ui-docs/css",
    "uib": "browser-sync start --server \"dist/ui-docs/\" --files \"dist/ui-docs/**\"",

},
"keywords": [],
"author": "",
"license": "ISC",
"dependencies": {
"browser-sync": "^2.26.12",
"node-sass": "^4.14.1",
"scss": "^0.2.4"
},
"devDependencies": {},
"repository": {
"type": "git",
"url": "git+https://github.com/vinaynkashyap/templates.git"
},
"bugs": {
"url": "https://github.com/vinaynkashyap/templates/issues"
},
"homepage": "https://github.com/vinaynkashyap/templates#readme",
"description": ""
}
