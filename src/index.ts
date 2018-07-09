import * as cron from 'cron';
import * as cheerio_client from 'cheerio-httpcli';
import {Client as DiscordClient, Message, TextChannel} from "discord.js";
import * as dotenv from 'dotenv';

dotenv.config();

const client = new DiscordClient();
client.login(process.env.DISCORD_TOKEN);
client.on('ready', async () => {
	console.log(await client.channels.find(val => (val as TextChannel).name == "general"));
	console.log(client.guilds);
});


client.on('message', mes => {
	if(mes.content == "!fsb start") {
		(mes.channel as TextChannel).send("test");
	}
});

const check_service_status = new cron.CronJob('*/5 * * * * * ', async () => {
	const message: string = "world";
	console.log(`Hello ${message}`);
	const $ = (await cheerio_client.fetch("https://status.epicgames.com")).$;
	const underMainte = await $('span.component-status').filter(function () { return !$(this).text().match(/Operational/)})
	if(underMainte.length != 0) return;
	console.log('メンテ終わり！Fortnite遊べるよ！');
},
undefined,
true,
"Asia/Tokyo"
);
