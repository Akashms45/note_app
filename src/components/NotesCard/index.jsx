import { useNotes } from "../../context/notes-context";
import { findNoteInArchive } from "../../utils/findNoteInArchive";
import { findNoteInBin } from "../../utils/findNoteInBin";

export const NotesCard = ({ id, text, title, isPinned }) => {
  const { noteDispatch, archive, bin } = useNotes();

  const isNoteArchived = findNoteInArchive(archive, id);

  const isNoteDeleted = findNoteInBin(bin, id);

  const onPinClick = (id) => {
    noteDispatch({
      type: "PIN",
      payload: { id },
    });
  };

  const onArchiveClick = (id) => {
    !isNoteArchived
      ? noteDispatch({
          type: "ADD_TO_ARCHIVE",
          payload: { id },
        })
      : noteDispatch({
          type: "REMOVE_FROM_ARCHIVE",
          payload: { id },
        });
  };

  const onBinClick = (id) => {
    !isNoteDeleted
      ? noteDispatch({
          type: "DELETED",
          payload: { id },
        })
      : noteDispatch({
          type: "RESTORE",
          payload: { id },
        });
  };

  const onDeleteClick = (id) => {
    noteDispatch({
      type: "P-DELETE",
      payload: { id },
    });
  };

  return (
    <div
      key={id}
      className="mt-10 w-[320px] h-[100px] border border-neutral-400 p-2 rounded-md"
    >
      <div className="flex justify-between border-b-2">
        <p>{title}</p>
        {/* Pin only for active notes */}
        {!isNoteArchived && !isNoteDeleted && (
          <button onClick={() => onPinClick(id)}>
            <span
              className={
                isPinned ? "material-icons" : "material-icons-outlined"
              }
            >
              push_pin
            </span>
          </button>
        )}
      </div>

      <div className="flex flex-col">
        <p>{text}</p>
        <div className="ml-auto">
          {/* Active notes → Archive + Bin */}
          {!isNoteArchived && !isNoteDeleted && (
            <>
              <button onClick={() => onArchiveClick(id)}>
                <span className="material-icons-outlined">archive</span>
              </button>
              <button onClick={() => onBinClick(id)}>
                <span className="material-symbols-outlined">delete</span>
              </button>
            </>
          )}

          {/* Archived notes → Unarchive only */}
          {isNoteArchived && !isNoteDeleted && (
            <button onClick={() => onArchiveClick(id)}>
              <span className="material-icons">unarchive</span>
            </button>
          )}

          {/* Deleted notes (Bin) → Restore + Permanent Delete */}
          {isNoteDeleted && (
            <>
              <button onClick={() => onBinClick(id)}>
                <span className="material-symbols-outlined">replay</span>
              </button>
              <button onClick={() => onDeleteClick(id)}>
                <span className="material-icons-outlined">delete</span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
