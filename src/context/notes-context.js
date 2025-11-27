import { createContext, useContext, useReducer } from "react";
import { noteReducer } from "../reducers/noteReducer";

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const initialValue = {
    title: "",
    text: "",
    note: [],
    archive: [],
    bin: [],
  };

  const [{ title, text, note, archive, bin }, noteDispatch] = useReducer(
    noteReducer,
    initialValue
  );

  return (
    <NotesContext.Provider
      value={{ title, text, note, archive, bin, noteDispatch }}
    >
      {children}
    </NotesContext.Provider>
  );
};

const useNotes = () => useContext(NotesContext);

export { NotesProvider, useNotes };
