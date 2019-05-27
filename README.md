# Wavager Project
YARN is used to manage dependencies
# Backend Node.js
*requirements :*
- sequelize-cli

first run `yarn`
add `.env` file at the root of project and add following lines
```text
DB_USERNAME='root'
DB_PASSWORD='******'
DB_NAME='my_db_name'
```
after you can run
```shell
npx sequelize-cli db:create
npx sequelize-cli db:migrate

node seeds/01_users.js
```
Now you are ready to use this backend project
# Backoffice React.js
run `yarn`

you can now use `backend/seeds/01_users.js` credentials
# Mobile-app React-native
run `yarn`

you can now use `backend/seeds/01_users.js` credentials