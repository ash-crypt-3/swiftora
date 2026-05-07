import useSWR from "swr";
import { fetcher, postsUrl, postBySlugUrl } from "@/services/wordpress";

export const usePosts = (opts) => {
  const { data, error, isLoading, mutate } = useSWR(postsUrl(opts), fetcher, {
    revalidateOnFocus: false,
  });
  return { posts: data || [], error, isLoading, mutate };
};

export const usePostBySlug = (slug) => {
  const { data, error, isLoading } = useSWR(
    slug ? postBySlugUrl(slug) : null,
    fetcher,
    { revalidateOnFocus: false },
  );
  const post = Array.isArray(data) && data.length ? data[0] : null;
  return { post, error, isLoading, notFound: !isLoading && !error && !post };
};
