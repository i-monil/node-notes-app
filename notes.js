const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    
    const duplicateNote = notes.find((note) => note.title === title)

    debugger

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log(chalk.green('New note added Success!'));
        
    }else{
        console.log(chalk.red('Duplicate Note Found!'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes();

    const found = notes.filter((note) => note.title === title)
    
    if(found.length === 0){
        console.log(chalk.bgRed('Note not found'))
    } else {
        const notesToKeep = notes.filter((note) => note.title != title)
        saveNotes(notesToKeep)
        console.log(chalk.bgGreen('Note Delete Success'));
    }
}

const listnotes = () => {
    const notes = loadNotes()

    console.log(chalk.blue("Your Notes ===>"))
    notes.forEach(note => {
        console.log(note.title)
    });
}

const readNote = (title) => {
    notes = loadNotes()
    noteFound = notes.find((note) => note.title === title)

    if(noteFound){
        console.log(chalk.green("Note Found!"))
        console.log("Title: " +noteFound.title)
        console.log("Body: " +noteFound.body)
    } else {
        console.log(chalk.red("Note not found!"))
    }
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)   
    } catch (error) {
        return []
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listnotes: listnotes,
    readNote: readNote
}