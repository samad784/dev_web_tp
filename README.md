# Projet de Présentation des Cryptomonnaies

## Description
Ce projet est une application web légère permettant d'afficher, rechercher, et modifier des informations sur les cryptomonnaies. Par défaut, il présente les 10 principales cryptomonnaies, avec la possibilité d'en ajouter ou d'en modifier dynamiquement via un formulaire et des boutons interactifs.

---

## Fonctionnalités principales
1. **Affichage dynamique des cryptomonnaies** :
   - Affiche une liste de 10 cryptomonnaies par défaut.
   - Chaque carte contient le nom, le symbole, le prix, un logo, et des boutons d'interaction.

2. **Recherche et filtrage** :
   - Recherche par nom ou symbole.
   - Filtrage par prix maximum.

3. **Modification des cryptomonnaies** :
   - Un bouton "Edit" permet de modifier le prix, le logo ou la description.

4. **Ajout de nouvelles cryptomonnaies** :
   - Un formulaire dédié permet d'ajouter de nouvelles cryptomonnaies.

5. **Persistance des données** :
   - Les données sont sauvegardées dans le `localStorage` pour être conservées même après un rechargement de la page.

---

## Structure des fichiers

### 1. **index.html**
- Page principale du projet.
- Contient :
  - Un formulaire pour rechercher et filtrer les cryptomonnaies.
  - Une section où les cartes des cryptomonnaies sont générées dynamiquement.
- Inclut les fichiers `cryptos.js` et `script.js` pour la logique et les données.

### 2. **form.html**
- Permet d'ajouter une nouvelle cryptomonnaie.
- Contient un formulaire avec les champs suivants :
  - Nom.
  - Symbole.
  - Prix.
  - URL du logo.
  - Description.

### 3. **cryptos.js**
- Contient la liste des 10 cryptomonnaies par défaut.
- Structure des données :
  ```javascript
  const defaultCryptos = [
      {
          name: "Bitcoin",
          symbol: "BTC",
          price: 28000,
          logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
          description: "Bitcoin est la première cryptomonnaie décentralisée...",
      },
      // Autres cryptomonnaies...
  ];
  ```

### 4. **script.js**
- Gère toute la logique dynamique du projet :
  - Chargement des données depuis `localStorage` ou `cryptos.js`.
  - Affichage des cryptomonnaies.
  - Filtrage par nom ou prix.
  - Boutons "En savoir plus" et "Edit".
  - Persistance des modifications dans le `localStorage`.

---

## Installation et utilisation

### Prérequis
- Navigateur moderne supportant JavaScript et `localStorage`.

### Étapes d'installation
1. Téléchargez les fichiers du projet.
2. Assurez-vous que les fichiers suivants sont dans le même dossier :
   - `index.html`
   - `form.html`
   - `cryptos.js`
   - `script.js`
3. Ouvrez `index.html` dans un navigateur pour afficher les cryptomonnaies.
4. Ouvrez `form.html` dans un navigateur pour ajouter de nouvelles cryptomonnaies.

### Utilisation
1. **Recherche** :
   - Entrez un nom ou un symbole dans le champ de recherche.
   - Définissez un prix maximum pour filtrer les résultats.
   - Cliquez sur **Rechercher**.

2. **Modification** :
   - Cliquez sur le bouton **Edit** d'une carte pour modifier ses informations.
   - Les modifications sont sauvegardées automatiquement.

3. **Ajout** :
   - Accédez à `form.html` pour ajouter une nouvelle cryptomonnaie.
   - Remplissez le formulaire et cliquez sur **Ajouter**.
   - Retournez sur `index.html` pour voir la nouvelle cryptomonnaie.

---

## Auteur
Créé avec 💻 par Abd-Samad El Haddad et Victor Teillaud
