# Pré-réquis
- Générer un nouvelle app express grâce au générateur express (express-cli)
`express nodejs-starter --no-view --git`
- installer les dépendances nécéssaires à la configuration
`npm i --save sequelize mysql2`
- Création d'une nouvelle base de données
```shell
mysql -u root -p
mysql > create database my_db_name;
# mysql> create database my_db_name;
# Query OK, 1 row affected (0.00 sec)
mysql > exit
```
- Créer un fichier .env
```shell
cp .env.local .env
```

# Gestion utilisateurs
## Création du modèle et des migrations
```shell
sequelize model:generate --name User --attributes firstName:STRING,lastName:STRING,email:STRING,password:STRING,isAdmin:BOOLEAN

sequelize db:migrate
```
## Création des routes
- [routes/users.js](./routes/users.js)
- [routes/auth.js](./routes/auth.js)

## Création de l'authentification
### Signin
 installation des librairies
```shell
npm i --save passport passport-local passport-jwt 
```
`passport.js` est une librairie qui permet de gérer tout type d'authentification utilisateur (strategies). nous utiliserons `local` pour la connexion par email et mot de passe, et `jwt` pour la protection des routes.
- [Configuration de la stratégie locale](./routes/strategies/local.js)
- [Utilisation sur la route auth/signin](./routes/auth.js#L7)

### Routes protégées
- [Configuration de la strategie jwt](./routes/strategies/jwt.js)
- [Protection d'une route](./routes/users.js#L7)
```shell
POST /auth/signup # body = {firstname: 'john', lastName: 'DOE', email: 'john-doe@domain.com', password: 'mypass'}
# It return 
{
    "user": {
        "id": 1,
        "firstName": "john",
        "lastName": "DOE",
        "email": "john-doe@domain.com",
        "password": "$2b$10$6X5cmJTDsWoJ7XB.fBnNm.geSVSUJX15x7caRk1JvIgmRuJefNNDi",
        "isAdmin": false,
        "updatedAt": "2018-11-20T22:26:04.439Z",
        "createdAt": "2018-11-20T22:26:04.439Z"
    }
}

POST /auth/signin # body = {email: 'john-doe@domain.com', password: 'mypass'}
# It return
{
    "user": {
        "id": 1,
        "email": "john-doe@domain.com",
        "isAdmin": false
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJqZWFuLWJlYmVyQGhvdG1haWwuZnIiLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNTQyNzUyNzkwfQ.dbStYNlaXdpMzS-vo4VfxmFNEiJnbxA8C04sHN5RYCE"
}

GET /users # headers = {Authorization: "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJqZWFuLWJlYmVyQGhvdG1haWwuZnIiLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNTQyNzUyNzkwfQ.dbStYNlaXdpMzS-vo4VfxmFNEiJnbxA8C04sHN5RYCE"}
# It return
{
    "users": [
        {
            "id": 1,
            "firstName": "john",
            "lastName": "DOE",
            "email": "john-doe@domain.com",
            "password": "$2b$10$6X5cmJTDsWoJ7XB.fBnNm.geSVSUJX15x7caRk1JvIgmRuJefNNDi",
            "isAdmin": false,
            "updatedAt": "2018-11-20T22:26:04.439Z",
            "createdAt": "2018-11-20T22:26:04.439Z"
        },
        {
            "id": 2,
            "firstName": "kevin",
            "lastName": "MITNIK",
            "email": "kevin-mitnik@hotmail.fr",
            "password": "$2b$10$6X5cmJTDsWoJ7XB.fBnNm.geSVSUJX15x7caRk1JvIgmRuJefNNDi",
            "isAdmin": false,
            "createdAt": "2018-11-20T22:26:04.000Z",
            "updatedAt": "2018-11-20T22:26:04.000Z"
        }
    ]
}
```

## Controllers 
Les Controllers sont les fichiers qui doivent abriter les actions
- 1 modèle a une ou plusieurs routes
- 1 route correspont à une action

 Afin de garder un projet propre et structuré, il est recommandé de déplacer les actions dans les controllers. Les routeurs doivent servir uniquement à créer la route et lier l'action concernée. 

Exemple d'application
[Route index users](./routes/users.js#L7) => [Action index users](./controllers/usersController.js#L4)

# Documentation API
### tl;dr `yarn makedoc`
http://apidocjs.com/#example-basic
`yarn makedoc` à la racine du projet exécutera le script défini dans package.json et génèrera un dossier api-documentation à la racine du projet. Si ce dossier existe déjà, la commande le mettra à jour.

Dans ce dossier, ouvrir index.html dans le navigateur.

Pour modifier cette documentation, la syntaxe à respecter dans les commentaires est décrite dans la doc ci-dessus; sinon s'inspirer de ./routes/users.js

##### Important: seuls les commentaires présents dans le dossier `routes` seront pris en compte par `yarn makedoc`

