---
title: Google cloud functions
created: 2022-05-06
updated: 2022-05-06
lang: en
---

Last week I was taking some leasons in google cloud functions, a very convinient way to develop serverless and autoscaling services. It supports different languages like javascript, python, java and goLang. Also, to start working with with it you will need a google cloud project and anable the cloud build api active it that.

### GCF v1

Cloud functions count with two versions currently. With v1, is possible to to listen 3 source of events pub/sub, cloud storage, and https requests. and offcourse you need be aware of some of the tech limitations such as 45 segs as max execution time and limited vertical scaling

### GCF v2

Some of those limitations are solved, or at least improved in v2. with that version will count with more event triggers thanks to new google service eventarc, wich is the way google centralize all events that are produced into its google services, so you won't be limited to the three services we mention above since it count with more event listeners. although you also can create custom event listeners by subscring to pub/sub topics. Moreover, time limit was increased to 60 seconds and larger compute instances

### References

Some resources but not all are listed here

1. [google cloud functions quickstart](https://cloud.google.com/functions/docs/quickstarts)
2. [introducing GCF v2](https://cloud.google.com/blog/products/serverless/introducing-the-next-generation-of-cloud-functions)
