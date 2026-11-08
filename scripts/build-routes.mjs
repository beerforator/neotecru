import {mkdir,copyFile} from 'node:fs/promises';
for(const route of ['formula','formula/sesderma','formula/lacabine','gallery','gallery/catalog','gallery/sesderma','gallery/lacabine']){await mkdir(`dist/${route}`,{recursive:true});await copyFile('dist/index.html',`dist/${route}/index.html`);}
