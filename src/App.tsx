import CreateNote from './components/CreateNote';
import Header from './components/Header';
import Box from '@mui/material/Box';
import Notes from './components/Notes';
import { useEffect, useState } from 'react';
import { NoteObject } from './models/note';

function App() {
    const [notes, setNotes] = useState<NoteObject[]>([]);

    useEffect(() => {
        if (sessionStorage.getItem('notes')) {
            setNotes(JSON.parse(sessionStorage.getItem('notes') as string));
        }
    }, []);

    const addNotes = (note: NoteObject) => {
        setNotes([note, ...notes]);
        console.log(notes);
        sessionStorage.setItem('notes', JSON.stringify([note, ...notes]));
    };

    const deleteNotes = (id: number) => {
        const updatedNotes = notes.filter(note => note.id !== id);
        setNotes(updatedNotes);
        sessionStorage.setItem('notes', JSON.stringify(updatedNotes));
    };

    return (
        <>
            <Header />
            <Box style={{ padding: 24 }}>
                <CreateNote addNotes={addNotes} />
                <Notes notes={notes} deleteNote={deleteNotes} />
            </Box>
        </>
    );
}

export default App;
