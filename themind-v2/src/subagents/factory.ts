export class SubagentFactory {
    spawn(type: 'social' | 'trading' | 'code', task: string): Subagent {
        console.log(`Spawning ${type} subagent for task: ${task}`);
        return new Subagent(type, task);
    }
}

export class Subagent {
    constructor(public type: string, public task: string) {}
    
    async execute() {
        // Logic for specific subagent types
        return `Executing ${this.type} task: ${this.task}`;
    }
}