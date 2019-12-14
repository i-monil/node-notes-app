const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

yargs.version('1.1.0')

//add, remove, list, read

// add command
yargs.command({
    command: 'add',
    describe: 'To add a new note',
    builder: {
        title: {
            describe: "Give a title to note",
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: "Give a body to your note",
            demandOption: true,
            type: 'string',
        }
    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.body)
    }
})

// remove command
yargs.command({
    command: 'remove',
    describe: 'To remove a note',
    builder: {
        title : {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.removeNote(argv.title);
    }
})

// list command
yargs.command({
    command: 'list',
    describe: 'To list a note',
    handler: () => {
        notes.listnotes();
    }
})

// read command
yargs.command({
    command: 'read',
    describe: 'To read a note',
    builder: {
        title: {
            demandOption: true,
            describe: "Enter title to search a note",
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.readNote(argv.title);
    }
})

yargs.parse();
// console.log(yargs.argv);