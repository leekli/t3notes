import { CreateNewNote } from "./CreateNewNote";

export const NotesListContainer = () => {
  return (
    <>
      <aside className="bg w-1/4 overflow-y-auto p-4">
        <CreateNewNote />
        <div className="mb-2 cursor-pointer rounded border border-black bg-gray-300 p-2 hover:bg-white">
          <div className="mb-2.5 flex items-center">
            <div className="badge badge-primary badge-outline">Note Topic</div>
            <p className="ml-2 text-black">
              <strong>Note Title</strong>
            </p>
          </div>
          <p className="text-gray-600">
            Date/Time - First 20 chars of note here
          </p>
        </div>
      </aside>
    </>
  );
};
