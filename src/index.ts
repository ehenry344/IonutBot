import 'dotenv/config'
import {
    Client,
    GatewayIntentBits,
    Events,
    TextChannel,
    Channel,
} from 'discord.js'

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
})

client.on(Events.ClientReady, async () => {
    console.log('Client Ready')
})

async function main() {
    return client.login(process.env.BOT_TOKEN)
}

main()
    .then(() => {
        client.channels
            .fetch('1050887114335723520')
            .then((guildChannel: Channel) => {
                if (guildChannel && guildChannel.isTextBased()) {
                    guildChannel.send(
                        'The notion that I am a terrible professor is severly mistaken'
                    )
                }
            })
    })
    .catch((failurePathology) => {
        console.error(failurePathology)
    })
