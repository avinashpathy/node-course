// const fs = require('fs');
// const utilName = require('./utils')
// const validator = require('validator')
// const chalk = require('chalk')
// console.log(validator.isEmail('avinash@gmail.com'))
// console.log(chalk.green('Success!'));
// fs.writeFileSync('notes.txt', 'This file is created using Node.js!');
// fs.appendFileSync('notes.txt', ' Testing appendFileSync function.')
// console.log(utilName)

const yargs = require('yargs');
yargs.version('1.1.0');

yargs.command({
    command:'add',
    describe:'Add a new note!',
    handler: function(){
        console.log('Adding a new note!')
    }
})

yargs.command({
    command:'remove',
    describe:'Remove a note!',
    handler: function(){
        console.log('Removing new note!')
    }
})

yargs.command({
    command:'list',
    describe:'List the notes!',
    handler: function(){
        console.log(' Listing the notes!')
    }
})

yargs.command({
    command:'read',
    describe:'Read a note!',
    handler: function(){
        console.log('Reading a note!')
    }
})

console.log(yargs.argv)