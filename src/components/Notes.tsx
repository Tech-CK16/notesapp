import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Note from './Note';
import { NoteObject } from '../models/note';

type INotesProps = {
    notes: NoteObject[];
    deleteNote: (id: number) => void;
};

const Notes: React.FC<INotesProps> = ({ notes, deleteNote }) => {
    return (
        <Box>
            <Typography variant="h3" sx={{ textAlign: 'center' }}>
                Notes
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                }}
            >
                {notes.map(note => (
                    <Note key={note.id} note={note} deleteNote={deleteNote} />
                ))}
            </Box>
        </Box>
    );
};

export default Notes;
