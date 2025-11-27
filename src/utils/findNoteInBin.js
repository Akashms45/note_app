export const findNoteInBin = (bin, id) => {
  return bin.some((note) => note.id === id);
};
