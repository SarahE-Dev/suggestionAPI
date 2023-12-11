const express = require('express');
const logger = require('morgan');
const path = require('path');

const app = express();

const suggestionRouter = require('./routes/suggestions/suggestionRouter')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/suggestions', suggestionRouter)

module.exports = app