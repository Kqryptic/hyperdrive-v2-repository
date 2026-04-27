import { Action, ActionResult, IAgentRuntime, Memory, State, HandlerCallback } from "@elizaos/core";

export const executeBankrTrade: Action = {
    name: "EXECUTE_BANKR_TRADE",
    similes: ["TRADE_ON_BANKR", "BANKR_EXECUTION", "SWAP_ON_BANKR"],
    description: "Delegates on-chain execution to the Bankr kernel.",
    validate: async (runtime: IAgentRuntime) => !!runtime.getSetting("BANKR_API_KEY"),
    handler: async (runtime, message, state, options, callback): Promise<ActionResult> => {
        const response = await fetch(`${runtime.getSetting("BANKR_URL") || "https://api.bankr.bot"}/api/v1/execute`, {
            method: "POST",
            headers: { 
                "Authorization": `Bearer ${runtime.getSetting("BANKR_API_KEY")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ intent: message.content.text, user: message.userId, platform: "elizaos" })
        });
        const result = await response.json();
        callback?.({ text: `bankr execution: ${result.summary}` });
        return { success: true, text: result.summary, data: result };
    }
};
