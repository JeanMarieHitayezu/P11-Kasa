# PROJET 11 - Kasa

In the project directory, you can run:
### `npm run starto`

#  11 - Kasa

Ce projet n° 11 de la formation F-E Openclassrooms consiste à développer une application Web avec React et React Router.
En tant que développeur F-E, vous êtes recruté  pour développer la nouvelle plateforme web de Kasa, une entreprise de location
d'appartements entre particuliers.

# Contraintes techniques

## React
Il est impératif d'utiliser ces éléments de React pour un code de qualité:
- Découpage en composants modulaires et réutilisables
- Un composant par fichier
- Structure logique des différents fichiers
- Utilisation de props entre les composants
- Utilisation du state dans les composants quand c'est nécessaire
- Gestion des événements

Il est recommandé d'utiliser des composants fonctionnels plutôt que les composants classes.
## React Router
- Les paramètres des routes sont gérés par React Router dans l'URL pour récupérer les informations de chaque logement.
- Il existe une page par route.
- La page 404 est renvoyée pour chaque route inexistante, ou si une valeur présente dans l'URL ne fait pas partie des données renseignées.
- La logique du routeur est réunie dans un seul fichier.

# Contraintes fonctionnellles
Quelques précisions sur les fonctionnalités du site:
- Pour le défilement des photos dans la galerie (composant Gallery): 
  + Si l'utilisateur se trouve à la première image et qu'il clique sur "image précédente", la galerie affiche la dernière image.
  + Inversement, quand l'image affichée est la dernière de la gallerie, si l'utilisateur clique sur "image suivante", la gallerie affiche la première image.
  + S'il n'ya qu'une seule image, les boutons "suivant" et "précédent" n'apparaissent pas.
  + La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l'image.
- Collapse: par défaut, les collapses sont fermés à l'initialisation de la page.
- Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer.
- Inversemet, si le Collapse est fermé, un clic permet de l'ouvrir. 

# Projet fonctionnel
1. Page d'accueil listant les différents logements
2. Page logement avec une description détaillée
3. Page à propos livrant plusieurs informations
4. Page d"erreur 404 si la route n'est pas trouvée

