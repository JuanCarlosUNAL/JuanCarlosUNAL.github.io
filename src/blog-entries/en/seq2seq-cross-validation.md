---
title: Cross validation with sequencial models
created: 2021-05-13
updated: 2021-05-13
lang: en
tags: ML, machine learning, validation, cross validation, k-fold, sequences, seq2seq
---

## First some context

In the lasts days, I been involved in an entity taging project, we already have a model and now we require do some validation with cross validation.

## Cross validation

The dataset is splited in 3 parts. test, validation and training. However this leaves the training set smaller and a training set that could be biased to a class in which the modlel behaves well, giving a wrong idea about the real performace.

Cross validation is a technich to evaluate the model behavior taking advantage of whole data in the training and validation set avoiding these sort of biases.

![cross validation](../files/cross_validation.png)

1. Chose _k_, the amount of folds and iterations.
2. those folds has double duty training and validation.
3. Lets use the last fold as validation and remaining as training for our model.
4. Iterate over the folds using the next as validation.

### The pronblem

The above case work well for models where the resulting classs does not depends on previous or following resutls, However with sequence models that normally depends on other results it is not posible split the dataset because of the lost of infomation.

## Solution

To solve this problem we can count with two aproaches.

### Cross validation in time series.

![cross validation](../files/cross_validation_time_series.png)

1. As with normal cross validation, we chose the number of folds _k_
2. Set _n_ with the first folds to be used as training set.
3. Loop over the fold but keeping the last fold in the trining set.

In this way the sequence is not broken in the training set. Although we can notice the last iteration is going to have mor training elemetns then more performace is expected.

### Block time series cross validation.

![cross validation](../files/cv_block_time_series.png)

1. lets _k_ with the same purpouse as above.
2. In each of the k sections we chose a percentage for training and other for testing.
