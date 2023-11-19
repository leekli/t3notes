import Image from "next/image";

export const CreateNewNote = () => {
  return (
    <>
      <div className="mb-2">
        <button className="btn btn-neutral">
          <Image
            src="/assets/create-new-note.png"
            alt="Notes Icon"
            width={40}
            height={40}
            className="w-5 rounded bg-white"
          />
          New Note...
        </button>
      </div>
    </>
  );
};
