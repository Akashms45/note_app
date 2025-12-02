import { Navbar } from "../../components/Navbar";
import { SideBar } from "../../components/Sidebar";
import { NotesCard } from "../../components/NotesCard";
import { useNotes } from "../../context/notes-context";
import { Footer } from "../../components/Footer";

export const Bin = () => {
  const { bin } = useNotes();

  return (
    <>
      <Navbar />
      <main className="flex gap-3 h-screen">
        <SideBar />
        <div>
          <div className="mt-12 flex flex-wrap gap-4">
            {bin.length > 0 ? (
              bin.map(({ id, text, title, isPinned }) => (
                <NotesCard
                  key={id}
                  id={id}
                  title={title}
                  text={text}
                  isPinned={isPinned}
                />
              ))
            ) : (
              <p className="text-neutral-500">No Deleted notes yet</p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
