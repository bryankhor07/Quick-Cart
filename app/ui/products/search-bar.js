"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="w-full border flex border-gray-300 bg-white p-6 rounded-lg shadow-lg">
      <input
        type="text"
        placeholder="Search for products..."
        className="w-full mt-2 mr-2 p-2 border border-gray-300 rounded-lg"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
      />
      <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 mt-2 rounded-lg">
        <MagnifyingGlassIcon className="w-5" />
      </button>
    </div>
  );
}
