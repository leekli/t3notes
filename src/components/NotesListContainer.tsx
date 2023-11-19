import { CreateNewNote } from "./CreateNewNote";

export const NotesListContainer = () => {
  return (
    <>
      <aside className="bg w-1/4 overflow-y-auto p-4">
        <CreateNewNote />
        <div className="mb-2 cursor-pointer rounded border bg-white p-2 hover:bg-gray-300">
          <p className="text-black">Note Title</p>
        </div>
      </aside>
    </>
  );
};
