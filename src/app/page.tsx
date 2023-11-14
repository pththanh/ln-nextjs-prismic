import { createClient } from "@/prismicio";
import Link from "next/link";

export default async function Home() {
  const client = createClient({}, "en-us");

  const { languages } = await client.getRepository();

  return (
    <main className="relative h-screen">
      <div className="absolute top-1/2 min-w-[560px] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-50	border border-gray-200 p-20 rounded-lg shadow">
        <h2 className="mb-5 text-4xl font-semibold text-gray-900 md:text-x">
          Choise Language
        </h2>
        <div className="flex justify-between gap-10 items-center">
          <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
            Choose one of our languages ​​offered below. Automatically select
            English as the default language in:{" "}
          </p>
          <div className="p-6 border border-gray-200 rounded-[50%] w-10 h-10 flex items-center justify-center">
            30
          </div>
        </div>

        <ul className="my-5 space-y-5">
          {languages?.map((item) => (
            <li key={item.id}>
              <Link
                href={`/${item.id}`}
                className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-slate-200 hover:bg-gray-100 group hover:shadow"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
