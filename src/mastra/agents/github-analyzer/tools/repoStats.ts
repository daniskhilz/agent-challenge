import { Tool } from "@mastra/core/tools";

export const repoStats: Tool = {
  name: "repoStats",
  description: "Get repository statistics like stars, forks, issues, etc.",
  inputSchema: "string",
  run: async (repo: string) => {
    const res = await fetch(`https://api.github.com/repos/${repo}`);
    if (!res.ok) return `❌ Failed fetching ${repo}`;
    const d = await res.json();
    return {
      full_name: d.full_name,
      stars: d.stargazers_count,
      forks: d.forks_count,
      open_issues: d.open_issues_count,
      watchers: d.watchers_count,
      updated_at: d.updated_at,
      url: d.html_url,
    };
  },
};
