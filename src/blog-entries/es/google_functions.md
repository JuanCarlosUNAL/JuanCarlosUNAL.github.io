---
title: Google cloud functions
created: 2022-05-06
updated: 2022-05-06
lang: es
---

La semana pasada estube tomando un curso de google cloud fucntions (GCF). Es una manera muy conveniente de desarrolar servicios serverless que escalen automaticamente. GCF soporta diferentes tipos de lenguajes como javascript, python, java y goLang. Para empezar a trabajar con esta tecnologia es necesario tener un proyecto de google cloud y `google cloud api` activo en tu proyecto.

### GCF v1

GCF cuenta con dos versiones actualmente. Con la version 1 es posible escuchar 3 distintos tipos de eventos proventientes de google pub/sub, google storage o http requests. y por su puesto tiene algunas limitaciones como 45 segundos como tiempo maximo para ejecutar tu funcion y escalado vertical, esto es el hardware en el que correra tu function.

### GCF v2

Algunas de estas limitaciones son superadas, o al menos mejoradas en la version 2. Con esta version countaras con mas eventos a los que podas escuchar gracias a google eventarc, que es una nueva manera en la que google centraliza eventos provenientes de provenientes de sus demas servicios, de esta manera el usuario ya no estara limitado por las tres fuentes de eventos que mencionamos anteriormente. sin embargo, tambien podras crear listeners personalizados con google pub/sub. tambien el tiempo ha sido incrementado a 60 segundos y el hardware disponible en las instancias de ejecucion son mejores.

## References

Algunos recursos en los que me base son:

1. [google cloud functions quickstart](https://cloud.google.com/functions/docs/quickstarts)
2. [introducing GCF v2](https://cloud.google.com/blog/products/serverless/introducing-the-next-generation-of-cloud-functions)
