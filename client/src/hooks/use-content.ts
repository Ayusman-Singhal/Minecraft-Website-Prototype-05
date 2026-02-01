import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { features as mockFeatures, news as mockNews, getNewsItem, serverStats } from "@/lib/mockData";

export function useFeatures() {
  return useQuery({
    queryKey: [api.features.list.path],
    // Frontend-only demo: return mocked features instead of fetching from a server
    queryFn: async () => {
      return mockFeatures;
    },
  });
}

export function useNewsList() {
  return useQuery({
    queryKey: [api.news.list.path],
    queryFn: async () => {
      return mockNews;
    },
  });
}

export function useNewsItem(id: number) {
  return useQuery({
    queryKey: [api.news.get.path, id],
    queryFn: async () => {
      // Demo: return mocked news item
      return getNewsItem(id);
    },
    enabled: !!id,
  });
}

export function useServerStats() {
  return useQuery({
    queryKey: [api.stats.get.path],
    queryFn: async () => {
      return serverStats;
    },
    refetchInterval: 10000, // Poll every 10 seconds (still useful in demo)
  });
}
