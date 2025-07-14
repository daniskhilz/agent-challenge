import { Agent } from "@mastra/core/agent";
import { repoStats } from "./tools/repoStats";
import { languageAnalysis } from "./tools/languageAnalysis";
import { contributorInsights } from "./tools/contributorInsights";
import { repoSearch } from "./tools/repoSearch";
import { compareTool } from "./tools/compareTool";

export default Agent({
  name: "GitHubRepoAnalyzer",
  description: "Analyze, compare, and explore GitHub repositories.",
  tools: [
    repoStats,
    languageAnalysis,
    contributorInsights,
    repoSearch,
    compareTool,
  ],
});
