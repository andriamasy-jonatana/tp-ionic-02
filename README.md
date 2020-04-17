# Andriamasy Jonatana
![Angular CI](https://github.com/andriamasy-jonatana/tp-ionic-02/workflows/Angular%20CI/badge.svg)
## TP IONIC

###### From ionic blank starter

#### Notation

- CI:
    - Cache :white_check_mark:
    - Builds :white_check_mark:
    - Units tests :white_check_mark:
    - Readme with Github Actions Badges :white_check_mark:

- Angular:
    - [Http Get Request](https://angular.io/guide/http) :white_check_mark:
    - Units Tests with HttpClientTestingModule
    - [Using Observable and Pipe Operator](https://www.learnrxjs.io/) :white_check_mark:
          
- Ionic:
    - [Ionic UI Components](https://ionicframework.com/docs/components) :white_check_mark:
    - [Ionic Native](https://ionicframework.com/docs/native) *onglet Community* :white_check_mark:
        - Camera *fait en cours*
        - travail en autonomie :
            - Régler le problème de CI *fait* :white_check_mark:
            - Geolocation *fait mais à améliorer*
            - Affichage d'une notification sur le clic d'un bouton *fait* :white_check_mark:
            - Affichage d'une preview de la caméra dans une NOUVELLE page *fait* :white_check_mark:
    - Android local Build :white_check_mark:

#### Scripts pour build Android

- Ajout de la plateforme Android `ionic cordova platform add android` (à ne faire qu'une fois en local)
- Build `ionic cordova build android --prod --release`
- MAJ des fichiers Angular dans le projet Android Studio `ionic cordova prepare android --prod --no-build`
- Emule le projet sur un device `ionic cordova emulate android --prod`
- Liste des prérequis pour Android `ionic cordova requirements android`

#### Debug depuis l'AVD

- Dans Google Chrome `chrome://inspect`
- Une catégorie *AOSP on IA Emulator* s'affiche, avec votre device et le bouton __inspect__
