## Instructions to run the app locally

1. git clone the repo on your machine `git clone https://github.com/DennisDurairaj/i2x-challenge.git`

2. Change directory to i2x-challenge `cd i2x-challenge`

3. Install packages using `npm install` or `yarn install`

4. To start the app using `webpack-dev-server` run the script `npm run dev` 

5. You can also run the app with the local server by running the script `npm start` and navigation to `localhost:9000` in your browser.

## Instructions to deploy the app on Heroku

1. Download & Install the Heroku CLI from [Heroku-CLI](https://devcenter.heroku.com/articles/heroku-command-line)

2. Open terminal and login to your heroku account `heroku login`

3. git clone the app source code `heroku git:clone -a i2x-challenge-dennis`

4. Change directory to i2x-challenge-dennis `cd i2x-challenge-dennis`

5. Now if you are an admin or have collaborator permissions, you can make changes and deploy them to heroku by running `git add .` `git commit -m "Your commit message"` `git push heroku master`

#### Link to live demo is [here](https://i2x-challenge-dennis.herokuapp.com/)
