const { SlashCommandBuilder } = require('discord.js');
let {total} = require('../list.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('quote')
		.setDescription('Quotes god'),
	async execute(interaction) {
		await interaction.reply(total[Math.floor(Math.random() * total.length)]).catch(err => {});
	},
};