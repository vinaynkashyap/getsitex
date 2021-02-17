You can use liveSassCompile.settings.excludeList setting to exclude specific folders. All Sass/Scss files inside the folders will be ignored.

You can use negative global pattern too if you want to exclude a specific file or files inside this folders.

Examples:

Default value

"liveSassCompile.settings.excludeList": [
"**/node_modules/**",
".vscode/**"
]
Negative glob pattern - if you want exclude all file except file1.scss & file2.scss from path/subpath directory, you can use the expression

"liveSassCompile.settings.excludeList": [
"path/subpath/\*[!(file1|file2)].scss"
]
