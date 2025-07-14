import { Tool } from "@mastra/core/tools";

export const repoSearch: Tool = {
  name: "repoSearch",
  description: "Search for popular GitHub repositories by keyword",
  inputSchema: "string",
  run: async (query: string) => {
    const encoded = encodeURIComponent(query);
    const res = await fetch(
      `https://api.github.com/search/repositories?q=${encoded}&sort=stars`
    );
    if (!res.ok) return `❌ Search failed: ${query}`;
    const data = await res.json();
    return data.items.slice(0, 5).map((repo: any) => ({
      full_name: repo.full_name,
      stars: repo.stargazers_count,
      url: repo.html_url,
    }));
  },
};
