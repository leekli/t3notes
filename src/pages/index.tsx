import Head from "next/head";
import { Header } from "~/components/Header";
import { api } from "~/utils/api";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from Lee" });

  return (
    <>
      <Head>
        <title>T3Notes</title>
        <meta name="description" content="T3 Notes App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <Header />
        </div>
      </main>
    </>
  );
}
