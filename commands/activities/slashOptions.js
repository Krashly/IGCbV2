const SlashOptions = require('/BaseClasses/SlashOptions');
const SlashOption = require('/BaseClasses/SlashOption');
const LangSingle = require('/BaseClasses/LangSingle');

module.exports = new SlashOptions({

	activity: new SlashOption({
		type: 3,
		required: true,
		autocomplete: true,
		description: new LangSingle({
			ru: 'Выберите activity',
			en: 'Choose activity',
			uk: 'Оберіть activity'
		})
	}),

	channel: new SlashOption({
		type: 7,
		channel_types: [2],
		description: new LangSingle({
			ru: 'Выберите голосовой канал',
			en: 'Choose voice channel',
			uk: 'Оберіть голосовий канал'
		})
	}),

});