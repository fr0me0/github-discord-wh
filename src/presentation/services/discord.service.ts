import { envs } from "../../config";

export class DiscordService {
    private readonly discordWebhookUrl = envs.DISCORD_WEBHOOK_URL;

    constructor() { }

    async notify(message: string) {
        const body = {
            content: message,
            embeds: [
                {
                    images: { url: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTA3YmR6cmNxa25laTEyOHFtZWpycXFxc2FoMnpjNGxqa3pkZzFiaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d9RbxjZ8QXesiYoerE/giphy.gif' }
                }
            ]
        }; // Discord DOC
        const resp = await fetch(this.discordWebhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });

        if (!resp.ok) {
            console.log('Error sending message to discord');

            return false;
        }

        return true;
    }
}