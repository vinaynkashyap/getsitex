# Indtall NPM Scss

### Steps

- Open terminal in VS code by pressing "Ctrl + `".
- Navigate to website development dir
- Type npm init -y to initiate npm and create a json file.
- Run cmd 'npm install node-sass'

### Add the watch command in package.jason

```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "scss": "node-sass --watch dev/scss -o dist/redx/css"
  },
```

### Run Scss

Type cmd "npm run scss" to start scss monitor your files for changes.

### Error: 'node-sass' is not recognized as an internal or external command, operable program or batch file.

Re-install scss rub cmd - npm install node-sass

Tut link
https://www.youtube.com/watch?v=TY6Vqro58aM
