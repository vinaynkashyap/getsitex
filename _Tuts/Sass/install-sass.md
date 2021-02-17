## Installing SCSS

There are multiple ways you can install Sass.
If you are going to use VS Code then it's best to install the Live Sass extension from within the VS Code program.
This makes sass available inside the VS Code without any additional setup.

Open the extensions and search fro Live Sass

install

NOTE: This extension has dependency on Live Server extension for live browser reload.

Let's see how it works by creating a projects.

By default any .scss file get's compiled to .css in the same location. But we want to set up a different path.

---

### How to change the compiled CSS path?

https://github.com/ritwickdey/vscode-live-sass-compiler/blob/master/docs/faqs.md

https://courses.kevinpowell.co/courses/master-sass/10996-the-setup/140971-sass-live-compiler-and-live-server-settings

Go to VScode User Settings --> Select "Live Sass Compiler Config --> add

"liveSassCompile.settings.formats": [{
"format": "expanded",
"extensionName": ".css",
"savePath": "./css"
}]

In my case Editing the settings.json file and adding the below code worked well.

    "liveSassCompile.settings.formats": [{
        "format": "expanded",
        "extensionName": ".css",
        "savePath": "~/../../dist/redx/css/"
    }

Documentation

https://github.com/ritwickdey/vscode-live-sass-compiler/blob/master/docs/settings.md
