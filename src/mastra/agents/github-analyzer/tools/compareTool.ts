import { Tool } from "@mastra/core/tools";
import { repoStats } from "./repoStats";
import { languageAnalysis } from "./languageAnalysis";
import { contributorInsights } from "./contributorInsights";

export const compareTool: Tool = {
  name: "compareTool",
  description: "Compare two GitHub repositories",
  inputSchema: "string",
  run: async (input: string) => {
    const [a, b] = input.split("vs").map((x) => x.trim());
    if (!a || !b) return "❌ Use format: <repo1> vs <repo2>";

    return {
      [a]: {
        stats: await repoStats.run(a),
        languages: await languageAnalysis.run(a),
        contributors: await contributorInsights.run(a),
      },
      [b]: {
        stats: await repoStats.run(b),
        languages: await languageAnalysis.run(b),
        contributors: await contributorInsights.run(b),
      },
    };
  },
};
