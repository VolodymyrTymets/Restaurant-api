# Test Node API Project
## Init Project

### Install npm
npm init
npm install --saveexpress mongoose body-parser
npm install --save-dev nodemon eslint babel-cli babel-core babel-eslint babel-preset-es2015 babel-preset-stage-0

### configure eslint
```
"eslintConfig": {
  "parserOptions": {
    "ecmaVersion": 7,
    "sourceType": "module",
  },
  "env": {
    "note": true,
  },
  "rules": {
    "no-console": 0,
    "no-unused-vars": 1
  }
},
```

### configure babel
new file `.babelrs`
```
{
  "presets": [
    "es2015",
    "stage-0"
  ]
}
```
in package file
```
"scripts": {
  "dev": "NODE_ENV=development nodemon -w src --exec \"babel-node src --presets es2015,stage-0\"",
  "build": "babel src -s -D -d dist --presets es2015,stage-0",
  "prestart": "npm run -s build",
  "start": "NODE_ENV=production pm2 start dist",
  "lint": "eslint src",
  ...
```
