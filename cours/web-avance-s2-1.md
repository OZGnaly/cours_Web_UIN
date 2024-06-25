---
marp: true
theme: uncover
_class: invert
paginate: true
---

<style>
  :body {
    --color-highlight: #EE0000;
    --color-highlight-hover: #aaf;
    --color-highlight-heading: #EE0000;
    --color-header: #bbb;
    --color-header-shadow: transparent;
  }
  h1 {
    font-size: 1.5em;
    color:  green ;
    text-align: center 
  }
  h2 {
    font-size: 1.2em;
    color: #;
    text-align: center
  }
  h3 {
    font-size: 1.0em;
    color: #;
    text-align: left
  }
  p {
  text-align: left;
  }
</style>

# **COURS WEB ET MOBILE AVANCEE**

## Ousman GNALY

### Universite Islamique au Niger

---
# Introduction à HTTP et son Utilisation dans une API REST

---

## HTTP : Protocole de Communication Hypertexte

---

HTTP, acronyme de *HyperText Transfer Protocol*, est le protocole de communication utilisé sur le World Wide Web. Il définit la manière dont les messages sont formatés et transmis, permettant ainsi l'échange d'informations entre des clients (comme les navigateurs web) et des serveurs web.

---

### Principes Fondamentaux

---

- **Protocole Client-Serveur** :
  - HTTP fonctionne sur un modèle client-serveur où un client envoie une requête à un serveur, qui répond avec une réponse.

---

- **Stateless (Sans état)** :
  - Chaque requête est traitée indépendamment des précédentes, sans que le serveur conserve l'état de la session entre les requêtes. Cela permet une scalabilité plus facile et une meilleure résilience face aux pannes.

---
- **Méthodes de Requête HTTP** :
  - **GET** : Récupère des données spécifiées par l'URI. Utilisé pour lire des ressources.
---
  - **POST** : Soumet des données à traiter au serveur, souvent pour créer de nouvelles ressources.
---
  - **PUT** : Met à jour les données spécifiées par l'URI. Utilisé pour modifier des ressources existantes.
---
  - **DELETE** : Supprime les données spécifiées par l'URI. Utilisé pour supprimer des ressources.
---
  - Et d'autres comme **PATCH** pour modifier partiellement une ressource, **HEAD** pour obtenir des métadonnées, **OPTIONS** pour obtenir les options de communication disponibles pour une ressource, etc.

---

- **Codes de Statut HTTP** :
  - Indiquent le résultat de la requête, tels que 200 OK (succès), 404 Not Found (ressource non trouvée), 500 Internal Server Error (erreur interne du serveur), etc.
---
## Utilisation dans une API REST

Une API REST (*Representational State Transfer*) est une architecture pour les services web, basée sur les principes d'HTTP.

### Caractéristiques Principales d'une API REST

- **Ressources Identifiées par URI** :
  - Chaque ressource (par exemple, un utilisateur, un article) est adressée par une URI unique. Par exemple, `/users`, `/articles/123`.

- **Manipulation des Ressources via Méthodes HTTP** :
  - Utilisation appropriée des méthodes HTTP (GET, POST, PUT, DELETE) pour créer, lire, mettre à jour et supprimer des ressources.

- **Représentation des Ressources** :
  - Les données sont souvent transmises en formats comme JSON ou XML pour représenter les états des ressources. Par exemple, un objet utilisateur peut être représenté en JSON avec des propriétés comme `{"id": 1, "nom": "John Doe", "email": "john.doe@example.com"}`.

- **Statelessness** :
  - Comme HTTP est sans état, chaque requête contient toutes les informations nécessaires pour comprendre et traiter la requête. Cela facilite l'évolutivité et la résilience de l'application.

### Avantages d'une API REST

- **Architecture Simplifiée** :
  - Utilisation des standards HTTP simplifie le développement et la maintenance des APIs, rendant les interactions entre clients et serveurs cohérentes et prévisibles.

- **Scalabilité et Performance** :
  - La séparation des préoccupations et la gestion sans état permettent une meilleure gestion de la charge et une scalabilité horizontale plus efficace.

- **Flexibilité** :
  - Permet l'intégration avec divers types de clients (web, mobile, IoT) grâce à son support pour plusieurs formats de données et méthodes d'interaction.

- **Indépendance des Clients et des Serveurs** :
  - Les clients et les serveurs peuvent évoluer indépendamment tant qu'ils respectent le contrat défini par l'API (les URIs et les formats de données).

### Exemple d'Utilisation

Pour illustrer, dans une API REST pour la gestion des utilisateurs :

- **GET /users** : Récupère la liste de tous les utilisateurs.
- **GET /users/{id}** : Récupère les détails d'un utilisateur spécifique.
- **POST /users** : Crée un nouvel utilisateur.
- **PUT /users/{id}** : Met à jour les informations d'un utilisateur existant.
- **DELETE /users/{id}** : Supprime un utilisateur spécifique.

Chaque requête HTTP dans une API REST correspond à une action spécifique sur une ressource, facilitant ainsi l'interaction et la manipulation des données à travers le web de manière cohérente et standardisée.

---

Cette introduction détaillée à HTTP et à son utilisation dans une API REST vous fournit une base solide pour comprendre et développer des services web modernes, tout en exploitant les principes de performance, de flexibilité et de maintenabilité offerts par cette architecture.
