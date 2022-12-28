import Note from "./Note";
import AddNote from "./AddNote";

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <>
      <AddNote handleAddNote={handleAddNote} />
      <br/>
      <div className="notes-list">
        {notes.map((note) => (
          <Note
            id={note.id}
            text={note.text}
            date={note.date}
            handleDeleteNote={handleDeleteNote}
            key={note.id}
          />
        ))}
      </div>
    </>
  );
};

export default NotesList;
