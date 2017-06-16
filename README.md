<a href="http://www.skylabcoders.com/"><img src="https://github.com/tonimg/Img-lang-programing/blob/master/skylab.png" width= "156px"></a>

<a href="https://mlab.com/"><img src="https://github.com/tonimg/Img-lang-programing/blob/master/mongolab.png" width= "128px"></a> <a href="https://www.mongodb.com/"><img src="https://github.com/tonimg/Img-lang-programing/blob/master/mongodb.png" width= "128px"></a>
<a href="https://www.javascript.com/"><img src="https://github.com/tonimg/Img-lang-programing/blob/master/javascript.png" width= "128px"></a>
<a href="https://www.w3.org/standards/webdesign/htmlcss"><img src="https://github.com/tonimg/Img-lang-programing/blob/master/html5-css3.png" width= "128px"></a>
<a href="http://sass-lang.com/"><img src="https://github.com/tonimg/Img-lang-programing/blob/master/Sass.png" width= "128px"></a>
<a href="http://getbootstrap.com/"><img src="https://github.com/tonimg/Img-lang-programing/blob/master/Boostrap.png" width= "128px"></a>
<a href="http://jquery.com/"><img src="https://github.com/tonimg/Img-lang-programing/blob/master/jquery_logo.png" width= "128px"></a>
<a href="https://angularjs.org/"><img src="https://github.com/tonimg/Img-lang-programing/blob/master/AngularJS.png" width= "128px"></a>
<a href="https://bower.io/"><img src="https://github.com/tonimg/Img-lang-programing/blob/master/bower.png" width= "128px"></a>
<a href="https://nodemailer.com"><img src="https://github.com/tonimg/Img-lang-programing/blob/master/Nodemailer.png" width= "128px"></a>
<a href="https://nodejs.org/en/"><img src="https://github.com/tonimg/Img-lang-programing/blob/master/Node.js.png" width= "128px"></a>
<a href="https://www.npmjs.com/"><img src="https://github.com/tonimg/Img-lang-programing/blob/master/npm.png" width= "128px"></a>
<a href="https://www.sublimetext.com/"><img src="https://github.com/tonimg/Img-lang-programing/blob/master/Sublimetext.png" width= "128px"></a>


<a href="http://standardjs.com/"><img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg" width= "128px"></a>

# [PADEL GO](https://padel-go.herokuapp.com/)

This repo contains the Full Stack project **PADEL GO**.

**PADEL GO** is made with **Node.js** and **Express.js** for the part of the server, and the client part is made with **AngularJS**.

## Installation

You have to install [NodeJS](https://nodejs.org/) with [npm](https://www.npmjs.com/), [bower](https://bower.io/) and [MongoDB](https://www.mongodb.com/)

### Configuration `env` file

You need to create an **.env** file in the project root with the following environment variables configured:

- Port:

  ```
  PORT=3000
  ```

- Mongodb path and database to use:

  ```
  DB_URI=mongodb://localhost:27017/NAME_DB
  ```

- Secret word to encrypt users' passwords:

  ```
  SECRET=XXXXXXXXXXXXXXXXXXXXXX
  ```

### To run the server:

```
$ npm start
```

All dependencies will be installed automatically


## Built with:

- **Front End**

    - angular: 1.6.4
      - angular-route: 1.6.5
      - angular-jwt: 0.1.9
      - angular-css: 1.0.8,
      - angular-sweetalert: 1.1.2,
    - bower: 1.8.0,
    - bootstrap: 3.3.5
    - font-awesome: 4.7.0,
    - jquery: 3.2.1,

- **Back End**

  - dotenv: 4.0.0
  - express: 4.15.3
    - express-jwt: 5.3.0
  - jsonwebtoken: 7.4.1
  - mongoose: 4.10.5,
    - mongoose-simple-random: 0.4.1,
  - passport: 0.3.2,
    - passport-jwt: 2.2.1,
    - passport-local: 1.0.0,
    - passport-local-mongoose: 4.0.0

## Authors

[Jaume Regas](https://github.com/jaumereg)

## Acknowledgments

- [SkylabCoders](https://github.com/SkylabCoders)
- [JuanMa Garrido](https://github.com/juanmaguitar)
- [AlejandroDG](https://github.com/agandia9)