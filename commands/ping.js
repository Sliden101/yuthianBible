const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Returns the bot\'s ping.'),
	async execute(interaction) {
        const message = await interaction.deferReply({
            fetchReply: true
        });
        const newMessage = `Client Ping: ${message.createdTimestamp - interaction.createdTimestamp}ms`
        await interaction.editReply({
            content: newMessage
        });
	},
};