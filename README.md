# react-interview

1. Lister les films dans des cartes avec: le titre en gras, la catégorie et une jauge type Youtube indiquant le ratio likes/dislikes. Les cartes doivent être côtes à côtes et responsive. Càd que lorsque la fenêtre se réduit, les cartes sautent à la ligne suivante.

2. Ajouter un bouton dans les cartes permettant de supprimer celle-ci

3. Ajouter un bouton toggle like/dislike

4. Ajouter un filtre par catégorie (de type multiselect) en supposant qu'on ne les connaisse pas à l'avance (il faut donc les récupérer dynamiquement depuis les films). Si tous les films d'une catégorie sont supprimés, celle-ci ne doit plus apparaître.

5. Ajouter un système de pagination avec les fonctionnalités suivantes:
    * Boutons précédent/suivant
    * Choix du nombre d'élements affichés par page (4, 8 ou 12).

Prenez des initiatives, il y a des points bonus si

* C'est joli
* Vous utilisez correctement REDUX
* Il y a une attention aux détails

/!\ La suppression du comportement asynchrone dans `movies.js` entraînera une annulation du test.

## 1. Clone application

To Clone the repo locally. In a terminal, run:

```
$ git clone https://github.com/Particeep/react-interview.git
```

### 2. Run the application
- Install [Node.js](https://nodejs.org/en/)
- Run `npm install` if you use npm or `yarn` if you use yarn inorder to install the dependencies
- Run `yarn start` to launch the app which will automatically launch the app in the browser.
