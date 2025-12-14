# BDS-Sanbercode-NodeJS-Batch-48

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
- Entity Relational Database

### Instalasi Babel

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

## Week 3

- Restfull API with Express
- CRUD dengan Express dan Sequalize
- Rest API with Adonis
- Migration with Adonis
- CRUD with Adonis

### Instalasi Sequelize

- Buat Project Express dengan Express Generator

```
npx express-generator project_name
```

- Install Sequelize dengan database yang digunakan

```
npx install --save sequelize mysql2
```

- Install Sequelize Migrations

```
npx sequelize-cli init
```

- Create Database menggunakan Sequelize

```
npx sequelize-cli db:create
```

- Create Model dan Migration menggunakan Sequelize

```
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
```

### Instalasi Adonis

- Creating new project

```
npm init adonis-ts-app@latest <project-name>
```

- Starting the Server

```
node ace serve --watch
```

- All Command

```
node ade
```
