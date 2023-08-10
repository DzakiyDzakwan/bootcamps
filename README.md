# BDS-Sanbercode-NodeJS-Batch-48

## Instalasi Babel

- Buat Project NPM
  `npm init -y`

- Install Babel
  `npm install  @babel/core @babel/cli @babel/preset-env --save`

- Tambahkan code berikut pada package.json

```
scripts": {
  ...
  "babel": "npx babel",
  ...
}
```

- Tambahkan File Baru dengan nama .babelrc lalu masukkan code berikut

```
{
  "presets" : [ "@babel/env" ]
}

```

- Tambahkan code berikut di package.json

```
"scripts": {
    "dev": "npm run babel dir_sumber -- --out-dir output_dir --watch"
  },
```

## Week 1

- CLI dan GIT
- Javascript String & Conditional
- Javascript Function & Looping
- Javascript Array
- Javascript Object

## Week 2

- Javascript ES6
- Javascript Class
- Javascript Asynchronus
- Database MYSQL
