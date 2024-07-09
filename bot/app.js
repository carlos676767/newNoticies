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
    const {title, urlToImage,content } = data.data.articles[0]
    channel.send({ embeds: [embedes(title, urlToImage, content)] });
    })
  }
})

const httpRequest = async (sucesso) => {
  try {
    const httpData = await axios.get(`https://newsapi.org/v2/top-headlines?apiKey=${config.apiKey}&language=en&pageSize=1`)
    sucesso(httpData)
  } catch (error) {
    console.log(error);
  }
};


const embedes = (title, urlToImage, conteudo) => {
  const embed =  new EmbedBuilder()
  .setColor("#0099ff")
  .setTitle(`\n${title}`)
  .setThumbnail(urlToImage)
  .setDescription(conteudo);
  return embed

}


(async() => {
 await client.login(config.token)
})()