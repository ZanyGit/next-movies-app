"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface Category {
  name: string;
  id: number;
}

const CategoryFilter = (props: {
  categories: Category[];
  selected: string;
}) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const switchCategory = (category: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", category);
    replace(`${pathname}?${params}`);
  };
  return (
    <div className="sm:flex sm:flex-row sm:justify-between gap-2 grid grid-cols-3">
      {props.categories.map((category) => (
        <div
          key={category.name}
          className={`cursor-pointer h-10 w-32 sm:w-40 border-2 rounded-full text-[#ffffff] text-center  flex flex-row items-center ${
            props.selected === category.id.toString() && "bg-[#ffffff]"
          }`}
          onClick={() => switchCategory(category.id.toString())}
        >
          <p
            className={`md:text-sm sm:text-xs lg:text-base text-center w-full ${
              props.selected === category.id.toString() && "text-[#1a1a1a]"
            }`}
          >
            {category.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CategoryFilter;
