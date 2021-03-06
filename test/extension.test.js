// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
// const vscode = require('vscode');
const Prism = require('prismjs');
const languages = require('prism-languages');
// const myExtension = require('../extension');
const jsonFile = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <header class="header" id="main-header">
    <button class="popup__button" type="button" aria-haspopup="menu" aria-expanded="false" data-popup-trigger>
      Menu
    </button>
  </header>
</body>
</html>

`

// Prism.languages['javascript']

const tokens = Prism.tokenize(jsonFile, Prism.languages['html'])

console.log(tokens[3].content[3])
