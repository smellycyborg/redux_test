import React, { ChangeEvent } from 'react';

interface NewNoteInputProps {
    addNote(note: string): void;
}

export const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
    const [note, setNote] = React.useState<string>('');

    const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
        setNote(event.target.value)
    }

    const onAddNoteClick = () => {
        addNote(note);
        setNote('');
    }

    return (
        <div className=''>
            <input value={note} onChange={updateNote} type='text' name='note' placeholder='note' />
            <button onClick={onAddNoteClick}>add</button>
        </div>
    )
}