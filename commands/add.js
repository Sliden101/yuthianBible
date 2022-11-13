const { SlashCommandBuilder } = require('discord.js');
let {total} = require('../list.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('add')
		.setDescription('add gods words to the list')
        .addStringOption(option =>
            option.setName('quote')
                .setDescription('The quote to add')),
	async execute(interaction) {
        let toAdd = interaction.options.getString('quote');
        total.push(toAdd);
		await interaction.reply(`Added ${toAdd} to the list`).catch(err => {});
	},
};
