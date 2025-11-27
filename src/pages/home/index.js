import { Navbar } from "../../components/Navbar";
import { SideBar } from "../../components/Sidebar";
import { NotesCard } from "../../components/NotesCard";
import { useNotes } from "../../context/notes-context";
import { Footer } from "../../components/Footer";

export const Home = () => {
  const { title, text, note, noteDispatch } = useNotes();

  const onTitleChange = (e) =>
    noteDispatch({ type: "TITLE", payload: e.target.value });

  const onTextChange = (e) =>
    noteDispatch({ type: "TEXT", payload: e.target.value });

  const onAddClick = () => {
    noteDispatch({ type: "ADD-NOTE" });
    noteDispatch({ type: "CLEAR-INPUTS" });
  };

  const OtherNotes =
    note?.length > 0 && note.filter(({ isPinned }) => !isPinned);

  return (
    <>
      <Navbar />
      <main className="flex gap-3 h-screen ">
        <SideBar />
        <div className="flex flex-col w-screen mt-7 ">
          <div className=" flex flex-col w-[450px] relative self-center">
            <input
              value={title}
              onChange={onTitleChange}
              className="border border-neutral-800 rounded-t-md focus:outline-none border-b-0 p-1"
              placeholder="Enter Title"
            />
            <textarea
              value={text}
              onChange={onTextChange}
              className="h-[100px] border border-neutral-800 rounded-b-md focus:outline-none border-t-0 p-1"
              placeholder="Enter Text"
            />
            <button
              aria-label="Add note"
              disabled={title.length === 0}
              onClick={onAddClick}
              className="w-7 h-7 absolute bottom-0 right-0 border bg-indigo-800 text-slate-50 rounded-full m-1"
            >
              <span className="material-symbols-outlined">add</span>
            </button>
          </div>

          <div className="mt-14 ml-10 flex flex-wrap gap-5">
            {OtherNotes?.length > 0 &&
              OtherNotes.map(({ id, text, title, isPinned }) => (
                <NotesCard
                  key={id}
                  id={id}
                  title={title}
                  text={text}
                  isPinned={isPinned}
                />
              ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
