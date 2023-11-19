import Image from "next/image";

export const Header = () => {
  return (
    <>
      <div className="navbar flex justify-between bg-base-300">
        <div className="avatar flex justify-start">
          <div className="w-15 rounded">
            <Image
              src="/assets/notes.png"
              alt="Notes Icon"
              width={40}
              height={40}
            />
          </div>
          <button className="btn btn-ghost text-xl">t3Notes</button>
        </div>
      </div>
    </>
  );
};
