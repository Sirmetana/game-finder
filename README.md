# GameFinder

Application web de catalogue et de notation de jeux vidéo, dans l'esprit de IMDb / Letterboxd. Projet de trois jours réalisé en équipe de trois.

Les données des jeux proviennent de l'API [RAWG](https://rawg.io/apidocs).

## Fonctionnalités

### MVP
- [ ] Catalogue de jeux (données récupérées via RAWG)
- [ ] Page de détail d'un jeu (titre, date de sortie, plateformes, genres, jaquette, description)
- [ ] Recherche par titre
- [ ] Inscription / connexion
- [ ] Notation et critique d'un jeu par un utilisateur
- [ ] Note moyenne affichée sur la fiche du jeu

### Bonus (si le temps le permet)
- [ ] Filtres par genre / plateforme
- [ ] Liste « à jouer » / « joués »
- [ ] Page de profil utilisateur

## Stack technique

| Domaine | Technologie |
|---|---|
| Langage | Java |
| Framework | Spring Boot |
| Persistance | Spring Data JPA (Hibernate) |
| Base de données | À définir (H2 pour le développement, PostgreSQL ou MySQL ensuite) |
| Sécurité | Spring Security |
| Vues | À définir (Thymeleaf proposé : rendu côté serveur, adapté à des débutants en web) |
| Style | Tailwind CSS |
| API externe | RAWG (`https://api.rawg.io/api`) |
| Build | Maven |
| Versionnement | Git / GitHub |

## Prérequis

- JDK (version à fixer pour toute l'équipe, par exemple 17 ou 21)
- Maven ou Gradle
- Node.js et npm (uniquement pour compiler Tailwind CSS)
- Une clé API RAWG (gratuite)
- Git

## Obtenir une clé API RAWG

1. Créer un compte sur <https://rawg.io/apidocs>
2. Générer une clé API
3. Ne **jamais** la committer dans le dépôt

## Installation

```bash
# 1. Cloner le dépôt
git clone https://github.com/Sirmetana/game-finder
cd game-finder

# 2. Installer les dépendances front (Tailwind)
npm install

# 3. Configurer la clé RAWG (voir section Configuration)

# 4. Compiler le CSS
npm run build:css

# 5. Lancer l'application
./mvnw spring-boot:run
```

L'application est ensuite accessible sur <http://localhost:8080>.

## Configuration

Les secrets sont fournis par variables d'environnement et ne sont pas versionnés.

Exemple de `application.properties` :

```properties
rawg.api.base-url=https://api.rawg.io/api
rawg.api.key=${RAWG_API_KEY}
```

Définir la variable avant de lancer l'application :

```bash
# Linux / macOS
export RAWG_API_KEY=votre_cle

# Windows (PowerShell)
$env:RAWG_API_KEY="votre_cle"
```

## Tailwind CSS

Tailwind est compilé via sa CLI et le CSS généré est placé dans les ressources statiques de Spring Boot.

Scripts à ajouter dans `package.json` (chemins à adapter à la structure du projet) :

```json
{
  "scripts": {
    "build:css": "tailwindcss -i ./src/main/resources/static/css/input.css -o ./src/main/resources/static/css/output.css",
    "watch:css": "tailwindcss -i ./src/main/resources/static/css/input.css -o ./src/main/resources/static/css/output.css --watch"
  }
}
```

Pendant le développement, lancer `npm run watch:css` dans un second terminal.

## Structure du projet (proposée)

```
src/main/java/.../
├── controller/     # Contrôleurs web
├── service/        # Logique métier, dont le client RAWG
├── repository/     # Interfaces Spring Data JPA
├── model/          # Entités (User, Review, éventuellement Game en cache)
├── dto/            # Objets de transfert pour les réponses RAWG
└── config/         # Sécurité, configuration du client HTTP
src/main/resources/
├── templates/      # Vues
├── static/         # CSS, images
└── application.properties
```

## Modèle de données (à valider en équipe)

- **User** : id, pseudo, email, mot de passe haché, rôle
- **Review** : id, note, commentaire, date, auteur (User), identifiant RAWG du jeu
- Les données des jeux eux-mêmes (titre, jaquette, etc.) sont récupérées via RAWG. La décision à trancher : les stocker localement (cache en base) ou les interroger à chaque affichage.

## Utilisation de l'API RAWG

Endpoints principaux :

| Usage | Endpoint |
|---|---|
| Liste / recherche de jeux | `GET /games?key=...&search=...&page=...` |
| Détail d'un jeu | `GET /games/{id}?key=...` |
| Genres | `GET /genres?key=...` |
| Plateformes | `GET /platforms?key=...` |

Points d'attention :
- La clé API est obligatoire sur chaque requête.
- Les résultats sont paginés.
- Le plan gratuit est limité en nombre de requêtes par mois : mettre en place un cache ou un stockage local pour éviter de les consommer inutilement.
- Les conditions d'utilisation de RAWG demandent notamment de citer RAWG comme source et de faire un lien vers leur site (voir leur documentation). Prévoir cette mention dans le pied de page.

## Organisation de l'équipe

| Membre | Responsabilité principale |
|---|---|
| À définir | Client RAWG, catalogue, recherche |
| À définir | Authentification, utilisateurs, sécurité |
| À définir | Interface Tailwind, templates, critiques et notes |

### Workflow Git
- Une branche par fonctionnalité : `feature/nom-de-la-fonctionnalité`
- Pas de commit direct sur `main`
- Pull request relue par au moins un autre membre avant fusion
- Commits courts et explicites

## Planning (3 jours)

- **Jour 1** : mise en place du projet, environnement commun, client RAWG, entités, authentification de base, squelette des pages
- **Jour 2** : catalogue et détail, recherche, notes et critiques, mise en forme Tailwind
- **Jour 3** : intégration, corrections, tests manuels, finitions, préparation de la présentation

## Lancer les tests

```bash
./mvnw test
```

## Équipe

- Rouguiyatou Diallo
- Tim Fromentin
- Lukas Siopathis

## Crédits

Données de jeux fournies par [RAWG](https://rawg.io).
