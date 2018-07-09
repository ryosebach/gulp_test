"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const cron = __importStar(require("cron"));
const discord_js_1 = require("discord.js");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const client = new discord_js_1.Client();
client.login(process.env.DISCORD_TOKEN);
client.on('ready', () => __awaiter(this, void 0, void 0, function* () {
    console.log(yield client.channels.find(val => val.name == "general"));
    console.log(client.guilds);
}));
client.on('message', mes => {
    if (mes.content == "!fsb start") {
        mes.channel.send("test");
    }
});
const check_service_status = new cron.CronJob('*/100 * * * * * ', () => {
    const message = "world";
    console.log(`Hello ${message}`);
}, undefined, true, "Asia/Tokyo");
