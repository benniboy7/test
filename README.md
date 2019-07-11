GetChip - Queue Page
====================

Requires
--------

* [Node.js](https://nodejs.org/en/) with [npm](https://www.npmjs.com/)
* optional [direnv](https://direnv.net/)
* optional [Netlify](https://www.netlify.com/)

Installation
------------

```
npm install
```

Environment
-----------

```
NODE_ENV=development
```

Development
-----------

```
npm start
```

Production
----------

[Netlify](https://www.netlify.com/) production build is triggered by any commit on `master` branch by default. Server side rendering is optionally provided by [Netlify](https://www.netlify.com/).

Build manually (`dist/` directory) by executing command:

```
npm run build
```
