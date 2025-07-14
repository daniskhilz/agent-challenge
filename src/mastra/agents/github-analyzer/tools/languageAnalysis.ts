import { Tool } from "@mastra/core/tools";

export const languageAnalysis: Tool = {
  name: "languageAnalysis",
  description: "Analyze language composition of a GitHub repo",
  inputSchema: "string",
  run: async (repo: string) => {
    const res = await fetch(`https://api.github.com/repos/${repo}/languages`);
    if (!res.ok) return `❌ Language analysis failed for ${repo}`;
    const data = await res.json();
    const total = Object.values(data).reduce((a: any, b: any) => a + b, 0) || 1;
    const breakdown: Record<string, string> = {};
    for (const lang in data) {
      breakdown[lang] = `${((data[lang] / total) * 100).toFixed(2)}%`;
    }
    return breakdown;
  },
};
