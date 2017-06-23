<a href="https://www.javascript.com/"><img src="https://github.com/jaumereg/img-logos/blob/master/logos/javascript.png" width= "64px"></a>
<a href="https://www.w3.org/standards/webdesign/htmlcss"><img src="https://github.com/jaumereg/img-logos/blob/master/logos/html5-css3.png" width= "128px"></a>
<a href="https://www.ecma-international.org/ecma-262/6.0/"><img src="https://github.com/jaumereg/img-logos/blob/master/logos/es6.png" width= "64px"></a>
<a href="http://sass-lang.com/"><img src="https://github.com/jaumereg/img-logos/blob/master/logos/sass.png" width= "64px"></a>
<a href="http://getbootstrap.com/"><img src="https://github.com/jaumereg/img-logos/blob/master/logos/bootstrap.png" width= "64px"></a>
<a href="http://jquery.com/"><img src="https://github.com/jaumereg/img-logos/blob/master/logos/jquery.png" width= "128px"></a>
<a href="https://angularjs.org/"><img src="https://github.com/jaumereg/img-logos/blob/master/logos/angularjs.png" width= "128px"></a>
<a href="https://nodejs.org/en/"><img src="https://github.com/jaumereg/img-logos/blob/master/logos/nodejs.png" width= "128px"></a>
<a href="https://www.expressjs.com/"><img src="https://github.com/jaumereg/img-logos/blob/master/logos/expressjs.png" width= "128px"></a>
<a href="https://mlab.com/"><img src="https://github.com/jaumereg/img-logos/blob/master/logos/mongolab.png" width= "128px"></a>
<a href="https://www.mongodb.com/"><img src="https://github.com/jaumereg/img-logos/blob/master/logos/mongodb.png" width= "128px"></a>
<a href="https://www.mongoosejs.com/"><img src="https://github.com/jaumereg/img-logos/blob/master/logos/mongoose.png" width= "128px"></a>
<a href="https://bower.io/"><img src="https://github.com/jaumereg/img-logos/blob/master/logos/bower.png" width= "64px"></a>
<a href="https://www.npmjs.com/"><img src="https://github.com/jaumereg/img-logos/blob/master/logos/npm.png" width= "128px"></a>
<a href="https://www.passportjs.org/"><img src="https://github.com/jaumereg/img-logos/blob/master/logos/passport.png" width= "64px"></a>
<a href="https://www.sublimetext.com/"><img src="https://github.com/jaumereg/img-logos/blob/master/logos/sublimetext.png" width= "64px"></a>


<a href="http://standardjs.com/"><img src="https://github.com/jaumereg/img-logos/blob/master/logos/js-standard-style.png" width= "128px"></a>

# [PADEL GO](https://padel-go.herokuapp.com/)

This repository contains the Full Stack project **PADEL GO**.

**PADEL GO** is a platform where [Padel](https://en.wikipedia.org/wiki/Padel_(sport)) players can create matches in order to find new users to play with. Padel is a racquet sport played in doubles that is growing a lot in Spain, the main problem is that sometimes you don't find people to play, Padel Go is created to resolve this issue. 

Padel Go is made with **Node.js** and **Express.js** for the server part, and **AngularJS** for the client part.

## Installation

You have to install [NodeJS](https://nodejs.org/) with [npm](https://www.npmjs.com/), [bower](https://bower.io/) and [MongoDB](https://www.mongodb.com/)

### Configuration `env` file

You need to create an **.env** file in the project root with the following environment variables configured:

- Port:

  ```
  PORT=3000
  ```

- MongoDB path and database to use:

  ```
  DB_URI=mongodb://localhost:27017/NAME_DB
  ```

- Secret word to encrypt users' passwords:

  ```
  SECRET=XXXXXXXXXXXXXXXXXXXXXX
  ```

### To run server:

```
$ npm start
```

All dependencies will be installed automatically


## Built with:

- **Front End**

    - angular: 1.6.4
      - angular-route: 1.6.5
      - angular-moment: 1.0.1
      - angular-jwt: 0.1.9
      - angular-toastr: 2.1.1
    - bower: 1.8.0,
    - bootstrap: 3.3.5
    - components-font-awesome: 4.7.0,
    - jquery: 3.2.1,

- **Back End**

  - dotenv: 4.0.0
  - express: 4.15.3
    - express-jwt: 5.3.0
  - jsonwebtoken: 7.4.1
  - mongoose: 4.10.4,
  - body-parser: 1.8.0,
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