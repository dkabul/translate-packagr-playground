# ngx-translate & ng-packagr example

lib-playground = library module 
new-playground = client module

`cd lib-playground`

`npm run build`

`cd dist`

`npm pack`

`cd ../new-playground`

`npm i ../lib-playground/dist/lib-playground-0.0.0.tgz`

`npm run start`
