import React from 'react';
import { NoteObject } from '../models/note';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';

const StyledCard = styled(Card)`
    width: 400px;
    margin: 20px;
`;

const Wrapper = styled(Box)`
    & > button {
        border: 1px solid red;
        color: red;
        background: #fff;
        margin-top: 10px;
    }
    & > button:hover {
        border: 1px solid red;
        background: red;
        color: #fff;
    }
`;

type INoteProps = {
    note: NoteObject;
    deleteNote: (id: number) => void;
};

const Note: React.FC<INoteProps> = ({ note, deleteNote }) => {
    return (
        <StyledCard style={{ backgroundColor: note.color }}>
            <CardContent>
                <Wrapper>
                    <Typography
                        variant="h4"
                        style={{ fontWeight: 'bold', marginBottom: 10 }}
                    >
                        {note.title}
                    </Typography>
                    <Typography variant="h5" style={{ marginBottom: 10 }}>
                        {note.details}
                    </Typography>
                    <Typography>{note.date}</Typography>
                    <Button
                        variant="outlined"
                        onClick={() => deleteNote(note.id)}
                    >
                        DELETE
                    </Button>
                </Wrapper>
            </CardContent>
        </StyledCard>
    );
};

export default Note;
