const express  = require('express');
const router = require('express').Router();
let Auth = require('../models/auth.model');


/**
 * @swagger
 * /auth/:
 *  get:
 *      descriptions: Use to get a time test
 *      responses:
 *          '200':
 *              description: Current time
 * */

router.route('/').get((req,res) => {
    // Auth.find()
    //     .then(users => res.json(users))
    //     .catch(err => res.status(400).json('Error: ' + err))
    res.json({title: 'Ruslan', time: Date.now().toString()})
});

/**
 * @swagger
 * /auth/:
 *  post:
 *      descriptions: Post data
 *      responses:
 *          '200':
 *              description: Current time
 * */
router.route('/').post((req,res) => {
    const username = req.body.username;
    const newUser = new User({username});

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(() => res.status(400).json('error: ' + err));
});

module.exports = router