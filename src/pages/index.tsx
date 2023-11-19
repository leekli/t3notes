import Head from "next/head";
import { Header } from "~/components/Header";
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
        <div className="flex min-h-screen bg-gray-100">
          <aside className="bg w-1/4 overflow-y-auto p-4">
            <div className="mb-2 cursor-pointer rounded border bg-white p-2 hover:bg-gray-100">
              <p>Note Title</p>
            </div>
          </aside>
          <div className="flex-1 p-4">
            <h2 className="mb-4 text-2xl font-bold">Note Header</h2>
            <p className="mb-2">Note Text</p>
            <small className="text-gray-500">Text small</small>
          </div>
        </div>
      </main>
    </>
  );
}
