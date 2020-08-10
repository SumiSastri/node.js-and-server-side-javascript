## Securely connecting mongoDB with Express

1.  First create a dotenv file `touch .env`

2.  Get the URI - this is what you have saved from setting up the db in the cloud in the main section in the `.env` file add ```mongodb+srv://<username>:<password>@cluster0.xfd8y.mongodb.net/test`

WITHOUT THE PASSWORD AND USER NAME to the file and it is NOT a string

3.  Make sure that the .env file is ignored in your `.gitignore` files - if you do not have a `.gitignore` then create one `touch .gitignore` and add all of these dot files to ignore when you pus to your repo

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local
.env

npm-debug.log*
yarn-debug.log*
yarn-error.log*
```

4.  Now git commit to your git repository and check that the files have been ignored by going into your repo on GitHub

5.  Now set up mongoDB and the connection to the mongoCloudDB go back to the `.env` file add ```mongodb+srv://<username>:<password>@cluster0.xfd8y.mongodb.net/test`, again rememember this is NOT a string, add user name and password that you have saved for your db

6.  Check the template for the set-up - make sure the error message is just above the `app.listen()` method for the Express server

7.  Check you are are connected to the cloud - make sure the connection has not expired, click connect again and to link local to cloud connection, if you are using a VPN ensure that you update the IP saved if the IP address has changed

8.  Secure server with Helmet
