# How to change the markdown look

Markdown extensions allow you to extend and enhance Visual Studio Code's built-in Markdown preview. This includes changing the look of the preview or adding support for new Markdown syntax.

Changing the look of the Markdown preview with CSS
Extensions can contribute CSS to change the look or layout of the Markdown preview. Stylesheets are registered using the markdown.previewStyles Contribution Point in the extension's package.json:

```
"contributes": {
    "markdown.previewStyles": [
        "./style.css"
    ]
}
```
"markdown.previewStyles" is a list of files relative to the extension's root folder.

Contributed styles are added after the built-in Markdown preview styles but before a user's "markdown.styles".

The Markdown Preview GitHub Styling extension is a good example that demonstrates using a stylesheet to make the Markdown preview look like GitHub's rendered Markdown. You can review the extension's source code on GitHub.

Adding suppo

[Read more](https://code.visualstudio.com/api/extension-guides/markdown-extension)