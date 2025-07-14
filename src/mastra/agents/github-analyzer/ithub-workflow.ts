import { createWorkflow } from "@mastra/core/workflows";
import agent from "./github-analyzer";

export default createWorkflow({
  agent,
  start: async ({ agent, input }) => {
    return await agent.call(input);
  },
});
