const axios = require("axios");
const config = require("../app.json")
const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent
	]
});

client.once('ready', async() => {
	console.log('bot online');
  const channel = client.channels.cache.get(config.idCanal)
  if (channel) {
    await httpRequest(data => {
    const {title, urlToImage,content,url } = data.data.articles[randomNoticies()]
    channel.send({ embeds: [embedes(title, urlToImage, content, url)] });
    })
  }
})

const httpRequest = async (sucesso) => {
  try {
    const httpData = await axios.get(`https://newsapi.org/v2/top-headlines?apiKey=${config.apiKey}&language=en&pageSize=50`)
    sucesso(httpData)
  } catch (error) {
    console.log(error);
  }
};

const embedes = (title, urlToImage, conteudo, url) => {
  const embed =  new EmbedBuilder()
  .setColor("#0099ff")
  .setTitle(`\n${title}`)
  .setThumbnail(urlToImage)
  .setDescription(conteudo)
  .setURL(url)
  return embed

}


function randomNoticies() {
  return Math.floor(Math.random() *50)
}

(async() => {
 await client.login(config.token)
})()