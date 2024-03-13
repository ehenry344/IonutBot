// prettier-ignore
import { 
    ApplicationCommandData, 
    ApplicationCommandType, 
    ChatInputCommandInteraction, 
} from 'discord.js'

export default {
    interactionName: 'ping', 
    registrationData: <ApplicationCommandData>{
        name: 'ping',
        description: 'slash command system check',
        type: ApplicationCommandType.ChatInput,
        dmPermission: false 
    },
    callback: async (interaction: ChatInputCommandInteraction) => {
        interaction.reply("pong"); 
    }
}
