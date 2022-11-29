# README

Node Packages
--------------
installed
- react router dom
- react bootstrap 
- bootstrap
- react uuid
- react chart js2
- react-hook-form
- react

not installed
- react hook form
- react query
- react input mask
- react-countup : number incrementor , climbs to specified number

one of the two
- react-daterange-picker : npm install @wojtekmaj/react-daterange-picker
- react-dates 
COLORS
-----
- #01968d
- #fbc724
- #fbc724

What I learned
- ChartJS
- Vite
- plaid




- fix expense-budget styling in transactions , expense-budget widget component

TODO
-----
Frontend 
--------
- finish transactions page
- create user account page 
  - allow to connect and remove multiple bank accounts
  - display user information
- create tools page
  - set budgets for month 
  - react hook form for creating and saving new goals 
- setup react form for creating new transactions without plaid
- setup react query and graphql client side
- setup authentication with Google and Plaid

Backend
-------
- create models and migrate to postgres db
- install and setup graphql
- install and setup plaid for ruby
- setup user authentication and authorization

- setup user model to be able to have multiple accounts connected to the app


Plaid
-----
- integrate plaid to frontend where user logs in to bank acct and receives a public token
- public token is returned to frontend in onSuccess callback 
- public token is passed from frontend to backend where it is exchanged for an access token
- access token is stored in the database and attached to that user
- the access token is persisted with every request to the plaid API endpoints