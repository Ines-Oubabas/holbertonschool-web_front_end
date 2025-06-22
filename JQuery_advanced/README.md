# 📘 JQuery Advanced – Holberton School

Ce projet a pour objectif de renforcer la maîtrise de **jQuery** à travers une série d'exercices progressifs. Il permet d’apprendre à manipuler le **DOM**, gérer des **événements**, envoyer des **requêtes AJAX** (GET, POST, DELETE), créer un **formulaire dynamique**, gérer la **pagination**, et interagir avec un **serveur JSON local** grâce à `json-server`.

---

## 📚 Objectifs pédagogiques

- Charger jQuery depuis un CDN
- Créer et modifier dynamiquement des éléments HTML avec jQuery
- Attacher des événements aux éléments (ex: click)
- Utiliser les fonctions `append`, `prepend`, `before`, `html`, `val`, `remove`, etc.
- Interroger une API via `$.ajax`, `$.get`, `$.post`
- Créer un formulaire de recherche connecté à Wikipedia
- Implémenter une pagination avec jQuery
- Interagir avec un serveur local simulé avec `json-server`

---

## 🛠️ Installation et préparation

### 1. Cloner le repository

```bash
git clone https://github.com/<Ines-Oubabas>/holbertonschool-web_front_end.git
cd holbertonschool-web_front_end/JQuery_advanced
```

### 2. Initialiser le projet et installer les dépendances

```bash
npm init -y
npm install json-server
```

---

## 🚀 Lancer les tests HTML

### ✅ Pour les fichiers `0-index.html` à `9-index.html` :

Lancer un serveur local :

```bash
python3 -m http.server
```

Puis ouvrir dans le navigateur :

```
http://localhost:8000/0-index.html
http://localhost:8000/1-index.html
...
http://localhost:8000/9-index.html
```

---

## 🌐 Lancer le serveur JSON (tasks 10 à 12)

### 1. Remplir `db.json` (déjà fourni dans le projet)

### 2. Démarrer le serveur json :

```bash
npx json-server --watch db.json
```

Cela démarre sur :
```
http://localhost:3000
```

Endpoints disponibles :
- `http://localhost:3000/posts`
- `http://localhost:3000/comments`
- `http://localhost:3000/profile`

### 3. Ouvrir les fichiers suivants dans le navigateur :

- `http://localhost:8000/10-index.html` → Lecture des posts (`GET`)
- `http://localhost:8000/11-index.html` → Ajout de post via formulaire (`POST`)
- `http://localhost:8000/12-index.html` → Suppression d’un post (`DELETE`)

---

## 📂 Fichiers inclus

- `0-index.html` à `9-index.html` : manipulation DOM, événements, formulaire, requêtes, pagination, etc.
- `10-index.html` à `12-index.html` : interaction avec une API locale (json-server)
- `db.json` : base de données simulée pour json-server
- `package.json` : configuration npm

---

## ✅ Technologies utilisées

- HTML5
- jQuery 3.7.1
- json-server
- API Wikipedia
- JavaScript (ES6)

---

## 👨‍💻 Auteur

Projet réalisé dans le cadre du programme **Holberton School - Web Front-End Curriculum**.

