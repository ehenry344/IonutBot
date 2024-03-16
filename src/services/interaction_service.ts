// Author(s) : Evan Henry

// Created: 3 / 9 / 2024
// Updated: 3 / 12 / 2024

import "axios" 

export class InteractionService {
    
    public static async RegisterInteractions() {
        const commandFile = "./features/slash_commands/testing/ping.js" 

        const commandInstance = import(commandFile)

        // just testing command registration for the bot 

        
    }
}
