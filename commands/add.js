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
		if (!['820326898499977216', '481674569954885633', '424824780395380736', '487506921038020610', '489426266257358863'].includes(interaction.author.id)) return;
        let toAdd = interaction.options.getString('quote');
        total.push(toAdd);
		await interaction.reply(`Added ${toAdd} to the list`).catch(err => {});
	},
};
