# Démarrer avec Create React App

Ce projet a été initialisé avec [Create React App](https://github.com/facebook/create-react-app).

## Configuration du projet

1. **Backend :**

   - Allez dans le répertoire `backend` :
     ```bash
     cd backend
     ```
   - Installez les dépendances :
     ```bash
     npm install
     ```
   - Lancez le serveur backend :
     ```bash
     npm start
     ```

2. **Frontend :**

   - Allez dans le répertoire `frontend` :
     ```bash
     cd frontend
     ```
   - Installez les dépendances :
     ```bash
     npm install
     ```
   - Lancez le serveur frontend :
     ```bash
     npm start
     ```

## Configuration de l'environnement

Créez un fichier `.env` dans le répertoire `backend` et ajoutez les variables suivantes :

JWT_SECRET=<votre-clé-secrète> MONGODB_URI=<votre-uri-mongodb>

## Ajout de Produits à la Base de Données

Pour ajouter des produits directement à la base de données, exécutez la commande suivante dans votre navigateur :

http://localhost:5000/api/seed

Cela ajoutera des produits dans la base de données.
