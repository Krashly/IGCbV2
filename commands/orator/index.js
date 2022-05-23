module.exports = {

	active : true,
	category : 'Роли',

	name : 'orator',
	title : {
		'ru':'Роль Младшего Оратора',
		'en':'The Role of the Junior Orator',
		'uk':'Роль Молодшого Оратора',
	},
	description : {
		'ru':'Переключает у указанного пользователя роль Младшего Оратора',
		'en':'Toggles the role of Junior Orator for the specified user',
		'uk':'Переключає у вказаного користувача роль Молодшого Оратора',
	},

	slashOptions : {

		user : {
			type : 6,
			required : true,
			description : {
				'ru':'Участник Сообщества у которого будет переключена роль Младшего Оратора',
				'en':'Community member whose Junior Orator role will be switched',
				'uk':'Користувач спільноти у якого буде перемикатися роль Молодшого Оратора',
			}
		}

	},

	init : function(path){
		this.role = guild.roles.cache.get('809040260582998016');

		if(!this.role){
			this.active = false;
			log.initText += log.error(path + ': Роль "Младший оратор" не найдена');
		}

		return this;
	},


	/**
	 * Обработка команды
	 * Проверяет наличие прав и выдаёт роль
	 * @param {CommandInteraction|UserContextMenuInteraction} int    Команда пользователя
	 * @param {GuildMember|Number}                            member Объект или ID пользователя
	 */
	call : async function(int, member){
		if(!this.permission(int.member))
			return int.reply({
				content : reaction.emoji.error + ' ' + localize(int.locale, 'You do not have enough rights to change the roles of other users'),
				ephemeral : true
			});

		const result = toggleRole(this.role, member, int.member);

		if(!result[0]) return int.reply({ content : reaction.emoji.error + ' ' + result[1], ephemeral : true});

		return int.reply({ content : reaction.emoji.success + ' ' + result[1], allowedMentions: {parse: []}});
	},


	/**
	 * Обработка слеш-команды
	 * @param {CommandInteraction} int Команда пользователя
	 */
	slash : async function(int){
		this.call(int, int.options.get('user').value);
	},

	/**
	 * Обработка контекстной команды
	 * @param {UserContextMenuInteraction} ctx
	 */
	contextUser : async function(int){
		this.call(int, int.targetMember);
	},

	/**
	 * Проверка наличия роли Оратор или права управления ролями
	 *
	 * @param {GuildMember} member
	 */
	permission : member =>
		member.permissions.has('MANAGE_ROLES') ||
		member.roles.cache.has('620194786678407181') ||
		member.id == '500020124515041283'

};