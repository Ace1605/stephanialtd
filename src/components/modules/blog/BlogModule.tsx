"use client";

import { useUrlManagedState } from "@/client_api/hooks/useUrlManagedState";
import { Pagination } from "@/components/commons/table/Pagination";
import { Tabs } from "@/components/commons/Tabs";
import { BlogPostCard } from "@/components/modules/blog/BlogPostCard";
import { blogZodSchema } from "@/zod_schemas/blog";
import clsx from "clsx";
import { defaultBlogPageSize } from "@/contants/blog";

interface BlogPost {
  id: string;
  data: {
    category: { id: string };
  };
}

interface BlogCategory {
  id: string;
  data: {
    name: string;
  };
}

interface Props {
  posts: BlogPost[];
  categories: BlogCategory[];
  searchParams: any;
}

export const BlogModule = ({ posts, categories, searchParams }: Props) => {
  const tabs = [
    { name: "All", value: "all" },
    ...categories?.map(({ id, data: { name } }) => ({
      name: String(name),
      value: id,
    })),
  ];

  const { setPagination, pagination, resetPagination, filters, setFilters } =
    useUrlManagedState(blogZodSchema, searchParams, defaultBlogPageSize, true);

  const filteredPosts = posts?.filter(({ data: { category } }) => {
    if (filters?.group?.value === "all") return true;
    return category?.id === filters?.group?.value;
  });

  const sliceStart = pagination?.pageIndex * pagination.pageSize;
  const sliceEnd = sliceStart + pagination.pageSize;

  return (
    <div>
      <div className="border-b border-neutral-200 pt-5 pb-3">
        <div className="app-container">
          <div className={"768:hidden flex"}>
            <select
              onChange={(e) => {
                const tab = tabs.find(({ value }) => e.target.value === value);

                if (!tab) return;

                setFilters((prev) => ({
                  ...prev,
                  group: tab,
                }));

                resetPagination();
              }}
              className={clsx("w-full bg-white capitalize focus:ring-0")}
              style={{
                border: "none",
                boxShadow: "none",
              }}
            >
              {tabs?.map(({ name, value }) => {
                return (
                  <option key={value} value={value}>
                    {name}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="hidden -ml-2 768:flex">
            <Tabs
              className={"rounded-full bg-transparent x-center"}
              sliderClassname={"bg-black rounded-full"}
              tabClassname={"w-fit px-2 640:px-5 capitalize"}
              layoutId={"library_tab"}
              tabs={tabs}
              displayValueClassname={
                "text-sm hover:text-primary-main text-neutral-main"
              }
              duration={0.3}
              currentTab={filters?.group}
              action={(tab) => {
                setFilters((prev) => ({
                  ...prev,
                  group: tab,
                }));
                resetPagination();
              }}
            />
          </div>
        </div>
      </div>
      <div className="app-container pt-7 768:pt-14 pb-6 768:mb-10">
        <div>
          {/* <div className='grid mt-6 grid-cols-12 gap-y-12 768:gap-x-12 '>
            {filteredPosts?.slice(sliceStart, sliceEnd)?.map((post) => {
              return <BlogPostCard post={post} key={post.id} />;
            })}
          </div> */}

          {filteredPosts?.length >= pagination.pageSize && (
            <Pagination
              className={"mt-12"}
              {...{ pagination, setPagination }}
              totalPages={Math.ceil(
                filteredPosts?.length / pagination?.pageSize
              )}
            />
          )}
        </div>
      </div>
    </div>
  );
};
