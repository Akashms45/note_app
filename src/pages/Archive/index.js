import { Navbar } from "../../components/Navbar";
import { SideBar } from "../../components/Sidebar";
import { NotesCard } from "../../components/NotesCard";
import { useNotes } from "../../context/notes-context";

export const Archive = () => {
  const { archive } = useNotes();

  return (
    <>
      <Navbar />
      <main className="flex gap-3">
        <SideBar />
        <div>
          <div className="mt-12 flex flex-wrap gap-4">
            {archive.length > 0 ? (
              archive.map(({ id, text, title, isPinned }) => (
                <NotesCard
                  key={id}
                  id={id}
                  title={title}
                  text={text}
                  isPinned={isPinned}
                />
              ))
            ) : (
              <p className="text-neutral-500">No Archived notes yet</p>
            )}
          </div>
        </div>
      </main>
    </>
  );
};
