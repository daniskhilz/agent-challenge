import { Tool } from "@mastra/core/tools";

export const contributorInsights: Tool = {
  name: "contributorInsights",
  description: "Get top contributors for a GitHub repository",
  inputSchema: "string",
  run: async (repo: string) => {
    const res = await fetch(
      `https://api.github.com/repos/${repo}/contributors`
    );
    if (!res.ok) return `❌ Couldn't get contributors for ${repo}`;
    const contributors = await res.json();
    return contributors.slice(0, 5).map((c: any) => ({
      login: c.login,
      contributions: c.contributions,
    }));
  },
};
