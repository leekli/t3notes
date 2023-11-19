export const SelectedNoteContainer = () => {
  return (
    <>
      <div className="flex-1 p-4">
        <h2 className="mb-4 text-2xl font-bold">Note Header</h2>
        <div className="badge badge-primary badge-outline mb-2.5">
          <p>Note Topic</p>
        </div>

        <div>
          <textarea
            className="textarea textarea-bordered textarea-md mt-2.5 h-screen w-full"
            placeholder="Write your Note here..."
            value="This is the existing Note text..."
          ></textarea>
        </div>
      </div>
    </>
  );
};
