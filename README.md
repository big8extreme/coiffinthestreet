# Coiff in the street Project
YARN is used to manage dependencies
# Backend Node.js
*requirements :*
- yarn
- node >= 8.11.3
- sequelize-cli
- mysql-server

first run `yarn`
add `.env` file in the backend folder of project and add following lines
```text
DB_USERNAME=
DB_PASSWORD=
DB_NAME=coits_development
HOST=127.0.0.1:5000
JWT_SECRET=SuP3rS3KreT
MAIL_HOST=
MAIL_PORT=
MAIL_SENDER=
MAIL_PASSWORD=
DB_HOSTNAME=127.0.0.1
```
after you can run
```shell
npx sequelize-cli db:create # Run db creation
npx sequelize-cli db:migrate # Runn migrations

node seeds/01_users.js&& node seeds/02_maraudes.js && node seeds/03_participants.js&& node seeds/04_configs.js # Run seeds

nodemon # Start server
```
Now you are ready to use this backend project
# Backoffice React.js
run `yarn && yarn start`

you can now use `backend/seeds/01_users.js` credentials
# Mobile-app React-native
run `yarn && yarn start`

you can now use `backend/seeds/01_users.js` credentials

# Deployment
On production, backoffice and backend are in the same folder, to deploy changes, you need to run `yarn build` into the backoffice folder (or the root project), it build the react project and moove it into `backend/client` folder. After you can deploy the project.