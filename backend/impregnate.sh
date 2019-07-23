sequelize db:drop
sequelize db:create
sequelize db:migrate
node ./seeds/01_users.js
node ./seeds/02_maraudes.js
node ./seeds/03_participants.js
node ./seeds/04_configs.js
echo ' '
echo ' '
echo 'Database is now ready to use, everything went fine !'
echo '-----------------------------------------'
echo 'To log as admin: '
echo ' '
echo 'Email : john-doe@gmail.com'
echo 'Password : test1234'
echo '-----------------------------------------'