import { v4 as uuid } from "uuid";

export const noteReducer = (state, { type, payload }) => {
  switch (type) {
    case "TITLE":
      return {
        ...state,
        title: payload,
      };
    case "TEXT":
      return {
        ...state,
        text: payload,
      };
    case "ADD-NOTE":
      return {
        ...state,
        note: [
          ...state.note,
          { title: state.title, text: state.text, id: uuid(), isPinned: false },
        ],
      };
    case "CLEAR-INPUTS":
      return {
        ...state,
        title: "",
        text: "",
      };
    case "PIN":
      return {
        ...state,
        note: state.note.map((note) =>
          note.id === payload.id ? { ...note, isPinned: !note.isPinned } : note
        ),
      };

    case "ADD_TO_ARCHIVE":
      return {
        ...state,
        archive: [
          ...state.archive,
          state.note.find(({ id }) => id === payload.id),
        ],
        note: state.note.filter(({ id }) => id !== payload.id),
      };
    case "REMOVE_FROM_ARCHIVE":
      return {
        ...state,
        note: [
          ...state.note,
          state.archive.find(({ id }) => id === payload.id),
        ],
        archive: state.archive.filter(({ id }) => id !== payload.id),
      };
    case "DELETE_FROM_ARCHIVE":
      return {
        ...state,
        bin: [...state.bin, state.archive.find(({ id }) => id === payload.id)],
        archive: state.archive.filter(({ id }) => id !== payload.id),
      };

    case "DELETED":
      return {
        ...state,
        bin: [...state.bin, state.note.find(({ id }) => id === payload.id)],
        note: state.note.filter(({ id }) => id !== payload.id),
      };
    case "RESTORE":
      return {
        ...state,
        note: [...state.note, state.bin.find(({ id }) => id === payload.id)],
        bin: state.bin.filter(({ id }) => id !== payload.id),
      };
    case "P-DELETE":
      return {
        ...state,
        bin: state.bin.filter(({ id }) => id !== payload.id),
      };
    default:
      return state;
  }
};
