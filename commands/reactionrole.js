module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = 'CHANNEL-ID';
        const role_1 = message.guild.roles.cache.find(role => role.name === "ROLE-NAME-1");
        const role_2 = message.guild.roles.cache.find(role => role.name === "ROLE-NAME-2");
        const role_3 = message.guild.roles.cache.find(role => role.name === "ROLE-NAME-3");
        const role_4 = message.guild.roles.cache.find(role => role.name === "ROLE-NAME-4");
                
        const role_1_emoji='🥼';
        const role_2_emoji='🎨';
        const role_3_emoji='😎';
        const role_4_emoji='🤓';

        let embed = new Discord.MessageEmbed()
        .setColor('#e42643')
        .setTitle('YOUR TITLE HERE')
        .setDescription('YOUR DESCRIPTION HERE ! \n\n'
        + '🤓 for ROLE 4\n'
        + '😎 for ROLE 3\n'
        + '🥼 for ROLE 1\n'
        + '🎨 for ROLE 2\n')

        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(role_1_emoji);
        messageEmbed.react(role_2_emoji);
        messageEmbed.react(role_3_emoji);
        messageEmbed.react(role_4_emoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === role_1_emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(role_1);
                }
                else if (reaction.emoji.name === role_2_emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(role_2);
                }
                else if (reaction.emoji.name === role_3_emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(role_3);
                }
                else if (reaction.emoji.name === role_4_emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(role_4);
                }

            } else {
                return;
            }    
        });

        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === role_1_emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(role_1);
                }
                else if (reaction.emoji.name === role_2_emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(role_2);
                }
                else if (reaction.emoji.name === role_3_emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(role_3);
                }
                else if (reaction.emoji.name === role_4_emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(role_4);
                }

            } else {
                return;
            }
        });

    }
}
