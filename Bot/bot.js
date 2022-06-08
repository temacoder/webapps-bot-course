const { Telegraf } = require("telegraf");
const TOKEN = "Ваш токен";
const bot = new Telegraf(TOKEN);

const web_link = "Ваша ссылка";

bot.start((ctx) =>
  ctx.reply("Добро пожаловать в наш интернет магазин 👇", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link }}]],
      resize_keyboard: true
    },
  })
);

bot.launch();
