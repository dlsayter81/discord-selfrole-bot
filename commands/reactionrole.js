module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = 'CHANNEL-ID';
        const role_1 = message.guild.roles.cache.find(role => role.name === "Muted");

                
        const role_1_emoji='🥼';


        let embed = new Discord.MessageEmbed()
        .setColor('#e42643')
        .setTitle('Dumb')
        .setDescription('Do Not be Stupid and click this. The result will be unchangable. \n\n'

        + '🥼 for ROLE 1\n'

        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(role_1_emoji);


        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === role_1_emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(role_1);
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
              
            } else {
                return;
            }
        });

    }
}
