import Head from "next/head";
import { Header } from "~/components/Header";
import { NotesListContainer } from "~/components/NotesListContainer";
import { SelectedNoteContainer } from "~/components/SelectedNoteContainer";
import { api } from "~/utils/api";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from Lee" });

  return (
    <>
      <Head>
        <title>t3Notes</title>
        <meta name="description" content="T3 Notes App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col">
        <Header />
        <div className="flex min-h-screen bg-gray-800">
          <NotesListContainer />
          <SelectedNoteContainer />
        </div>
      </main>
    </>
  );
}
