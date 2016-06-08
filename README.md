# Cookie Jar Of Awesome

_For type A personalities who have trouble celebrating small wins, or for when you are just feeling down and need a little pick-me-up_

__This is a very early, first MVP version of the app. All it does is take a string to input in a database. Then when you retreive, it just grabs a 10 random strings__

There's two parts to this... the `server` and the `app`

###Server

Go into the server directory: `cja-server`

Install all dependencies (install anything not included in package.json)

`npm i`

Install rethink: `brew update && install rethinkdb`
Run rethinkdb: `rethinkdb`. Make sure it's running on port `:8080` or change the `config` file in the server files.

Run setup: `npm run setup`
Start server! (make sure nothing else is on the same port, if you change it, the native app will need to know):
`npm run start`

###Native App

Go get yourself [react-native](https://facebook.github.io/react-native/)

Run it! `react-native run-ios`

###voilaaaa :D

