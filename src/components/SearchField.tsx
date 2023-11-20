"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
const SearchField = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const handleSearch = (e) => {
    const params = new URLSearchParams(searchParams);
    params.set("q", e.target.value);
    replace(`${pathname}?${params}`);
  };
  return (
    <div className="rounded-full bg-white max-w-sm w-full h-10 flex-row flex items-center">
      <Image
        src="/search.svg"
        alt="cold"
        width={500}
        height={500}
        className="object-cover w-6 h-6 mx-2 text-teal-500"
      />
      <input
        className="outline-none"
        placeholder="Search movie titles..."
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchField;
