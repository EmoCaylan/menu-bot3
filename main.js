const { Client } = require("discord.js");
const cfg = require("./config.json");
const { MessageMenuOption,  MessageMenu, MessageActionRow } = require('discord-buttons');
const client = new Client({ disableMentions: "everyone", ignoreDirect: true, ignoreRoles: true, fetchAllMembers: true, _tokenType: "Bot" });
require('discord-buttons')(client)


client.on("message", async(msg) => {
if (msg.author.id === cfg.Bot.Owner) {
 if (msg.content === "!menü-add1") {
  const seçenek1 = new MessageMenuOption().setLabel('Lovers').setEmoji('♥️').setValue('Lovers').setDescription('Lovers rolünü üstüne al.')
  const seçenek2 = new MessageMenuOption().setLabel('Alone').setEmoji('🌙').setValue('Alone').setDescription('Alone rolünü üstüne al.')      
  const seçenek3 = new MessageMenuOption().setLabel('Sevgili Yapmıyorum').setEmoji('🔒').setValue('Sevgili Yapmıyorum').setDescription('Sevgili Yapmıyorum rolünü üstüne al.')     
  const select = new MessageMenu()
    .setID('select1')
    .setPlaceholder('Bir rol seç')
    .addOption(seçenek1)
    .addOption(seçenek2)
    .addOption(seçenek3)
    .setMaxValues(1)
    .setMinValues(1)
 const Row1 = new MessageActionRow()
 .addComponent(select)   

await msg.channel.send('**Menü: İlişki Rolleri**', { components: [Row1] }); 
 } else if (msg.content === "!menü-remove1") {
  const seçenek1 = new MessageMenuOption().setLabel('Lovers').setEmoji('♥️').setValue('Lovers').setDescription('Lovers rolünü üstünden çıkar.')
  const seçenek2 = new MessageMenuOption().setLabel('Alone').setEmoji('🌙').setValue('Alone').setDescription('Alone rolünü üstünden çıkar.')      
  const seçenek3 = new MessageMenuOption().setLabel('Sevgili Yapmıyorum').setEmoji('🔒').setValue('Sevgili Yapmıyorum').setDescription('Sevgili Yapmıyorum rolünü üstünden çıkar.')          
   const select = new MessageMenu()
    .setID('select1')
    .setPlaceholder('Bir rol seç')
    .setMaxValues(1)
    .setMinValues(1)
    .addOption(seçenek1)
    .addOption(seçenek2)
    .addOption(seçenek3)

 const Row1 = new MessageActionRow()
 .addComponent(select)   

await msg.channel.send('**Menü: İlişki Rolleri Silme**', { components: [Row1] });     
 }
}
})

client.on('clickMenu', async menu => {
const Member = menu.clicker.member 
 if (menu.values[0] == 'Lovers') {
  if (!Member.roles.cache.has(cfg.Roles.Lovers)) {
    await Member.roles.add(cfg.Roles.Lovers)
    return menu.reply.send('Aşağıdaki roller başarıyla üstünüze eklendi:\n\n• '+menu.values[0]+'', true)
  } else if(Member.roles.cache.has(cfg.Roles.Lovers)) {
    await Member.roles.remove(cfg.Roles.Lovers)
    return menu.reply.send("Aşağıdaki roller başarıyla üstünüzden alındı:\n\n• "+menu.values[0]+"", true)
  }
} 

   if (menu.values[0] == 'Alone') {
  if (!Member.roles.cache.has(cfg.Roles.Alone)) {
    await Member.roles.add(cfg.Roles.Alone)
    return menu.reply.send('Aşağıdaki roller başarıyla üstünüze eklendi:\n\n• '+menu.values[0]+'', true)
  } else if(Member.roles.cache.has(cfg.Roles.Alone)) {
    await Member.roles.remove(cfg.Roles.Alone)
    return menu.reply.send("Aşağıdaki roller başarıyla üstünüzden alındı:\n\n• "+menu.values[0]+"", true)
  }
} 

     if (menu.values[0] == 'LGBT') {
  if (!Member.roles.cache.has(cfg.Roles.Lgbt)) {
    await Member.roles.add(cfg.Roles.Lgbt)
    return menu.reply.send('Aşağıdaki roller başarıyla üstünüze eklendi:\n\n• '+menu.values[0]+'', true)
  } else if(Member.roles.cache.has(cfg.Roles.Lgbt)) {
    await Member.roles.remove(cfg.Roles.Lgbt)
    return menu.reply.send("Aşağıdaki roller başarıyla üstünüzden alındı:\n\n• "+menu.values[0]+"", true)
}}})
client.on("message", async(msg) => {
  if (msg.author.id === cfg.Bot.Owner) {
   if (msg.content === "!menü-add2") {
    const seçenek1 = new MessageMenuOption().setLabel('GTA V').setValue('GTA V').setDescription('GTA V rolünü üstüne al.')
    const seçenek2 = new MessageMenuOption().setLabel('League of Legends').setValue('League of Legends').setDescription('League of Legends rolünü üstüne al.')      
    const seçenek3 = new MessageMenuOption().setLabel('Rocket League').setValue('Rocket League').setDescription('Rocket League rolünü üstüne al.')     
    const seçenek4 = new MessageMenuOption().setLabel('Minecraft').setValue('Minecraft').setDescription('Minecraft rolünü üstüne al.')     
    const seçenek5 = new MessageMenuOption().setLabel('Apex Legends').setValue('Apex Legends').setDescription('Apex Legends rolünü üstüne al.')     
    const seçenek6 = new MessageMenuOption().setLabel('CS:GO').setValue('CS:GO').setDescription('CS:GO rolünü üstüne al.')     
    const seçenek7 = new MessageMenuOption().setLabel('Rainbow Six Siege').setValue('Rainbow Six Siege').setDescription('Rainbow Six Siege rolünü üstüne al.')     
    const seçenek8 = new MessageMenuOption().setLabel('Valorant').setValue('Valorant').setDescription('Valorant rolünü üstüne al.')     
    const seçenek9 = new MessageMenuOption().setLabel('PUBG').setValue('PUBG').setDescription('PUBG rolünü üstüne al.')     
    const seçenek10 = new MessageMenuOption().setLabel('Dota 2').setValue('Dota 2').setDescription('Dota 2 rolünü üstüne al.')     
    const seçenek11 = new MessageMenuOption().setLabel('Fortnite').setValue('Fortnite').setDescription('Fortnite rolünü üstüne al.')     
    const seçenek12 = new MessageMenuOption().setLabel('Gartic').setValue('Gartic').setDescription('Gartic rolünü üstüne al.')     
    const select = new MessageMenu()
      .setID('select1')
      .setPlaceholder('Bir rol seç')
      .addOption(seçenek1)
      .addOption(seçenek2)
      .addOption(seçenek3)
      .addOption(seçenek4)
      .addOption(seçenek5)
      .addOption(seçenek6)
      .addOption(seçenek7)
      .addOption(seçenek8)
      .addOption(seçenek9)
      .addOption(seçenek10)
      .addOption(seçenek11)
      .addOption(seçenek12)
      .setMaxValues(1)
      .setMinValues(1)
   const Row1 = new MessageActionRow()
   .addComponent(select)   
  
  await msg.channel.send('**Menü: Oyun Rolleri**', { components: [Row1] }); 
   } else if (msg.content === "!menü-remove2") {
    const seçenek1 = new MessageMenuOption().setLabel('GTA V').setValue('GTA V').setDescription('GTA V rolünü üstünden çıkar.')
    const seçenek2 = new MessageMenuOption().setLabel('League of Legends').setValue('League of Legends').setDescription('League of Legends rolünü üstünden çıkar.')      
    const seçenek3 = new MessageMenuOption().setLabel('Rocket League').setValue('Rocket League').setDescription('Rocket League rolünü üstünden çıkar.')     
    const seçenek4 = new MessageMenuOption().setLabel('Minecraft').setValue('Minecraft').setDescription('Minecraft rolünü üstünden çıkar.')     
    const seçenek5 = new MessageMenuOption().setLabel('Apex Legends').setValue('Apex Legends').setDescription('Apex Legends rüstünden çıkar.')     
    const seçenek6 = new MessageMenuOption().setLabel('CS:GO').setValue('CS:GO').setDescription('CS:GO rolünü üstünden çıkar.')     
    const seçenek7 = new MessageMenuOption().setLabel('Rainbow Six Siege').setValue('Rainbow Six Siege').setDescription('Rainbow Six Siege rolünü üstünden çıkar.')     
    const seçenek8 = new MessageMenuOption().setLabel('Valorant').setValue('Valorant').setDescription('Valorant rolünü üstünden çıkar.')     
    const seçenek9 = new MessageMenuOption().setLabel('PUBG').setValue('PUBG').setDescription('PUBG rolünü üstünden çıkar.')     
    const seçenek10 = new MessageMenuOption().setLabel('Dota 2').setValue('Dota 2').setDescription('Dota 2 rolünü üstünden çıkar.')     
    const seçenek11 = new MessageMenuOption().setLabel('Fortnite').setValue('Fortnite').setDescription('Fortnite rolünü üstünden çıkar.')     
    const seçenek12 = new MessageMenuOption().setLabel('Gartic').setValue('Gartic').setDescription('Gartic rolünü üstünden çıkar.')           
     const select = new MessageMenu()
      .setID('select1')
      .setPlaceholder('Bir rol seç')
      .setMaxValues(1)
      .setMinValues(1)
      .addOption(seçenek1)
      .addOption(seçenek2)
      .addOption(seçenek3)
      .addOption(seçenek4)
      .addOption(seçenek5)
      .addOption(seçenek6)
      .addOption(seçenek7)
      .addOption(seçenek8)
      .addOption(seçenek9)
      .addOption(seçenek10)
      .addOption(seçenek11)
      .addOption(seçenek12)
  
   const Row1 = new MessageActionRow()
   .addComponent(select)   
  
  await msg.channel.send('**Menü: Oyun Rolleri Silme**', { components: [Row1] });     
   }
  }
  })
  
  client.on('clickMenu', async menu => {
  const Member = menu.clicker.member 
   if (menu.values[0] == 'GTA V') {
    if (!Member.roles.cache.has(cfg.Roles.gtav)) {
      await Member.roles.add(cfg.Roles.gtav)
      return menu.reply.send('Aşağıdaki roller başarıyla üstünüze eklendi:\n\n• '+menu.values[0]+'', true)
    } else if(Member.roles.cache.has(cfg.Roles.gtav)) {
      await Member.roles.remove(cfg.Roles.gtav)
      return menu.reply.send("Aşağıdaki roller başarıyla üstünüzden alındı:\n\n• "+menu.values[0]+"", true)
    }
  } 
  
     if (menu.values[0] == 'League of Legends') {
    if (!Member.roles.cache.has(cfg.Roles.lol)) {
      await Member.roles.add(cfg.Roles.lol)
      return menu.reply.send('Aşağıdaki roller başarıyla üstünüze eklendi:\n\n• '+menu.values[0]+'', true)
    } else if(Member.roles.cache.has(cfg.Roles.lol)) {
      await Member.roles.remove(cfg.Roles.lol)
      return menu.reply.send("Aşağıdaki roller başarıyla üstünüzden alındı:\n\n• "+menu.values[0]+"", true)
    }
  } 
  
       if (menu.values[0] == 'Rocket League') {
    if (!Member.roles.cache.has(cfg.Roles.rocket)) {
      await Member.roles.add(cfg.Roles.rocket)
      return menu.reply.send('Aşağıdaki roller başarıyla üstünüze eklendi:\n\n• '+menu.values[0]+'', true)
    } else if(Member.roles.cache.has(cfg.Roles.rocket)) {
      await Member.roles.remove(cfg.Roles.rocket)
      return menu.reply.send("Aşağıdaki roller başarıyla üstünüzden alındı:\n\n• "+menu.values[0]+"", true)
   }
  }
  if (menu.values[0] == 'Minecraft') {
    if (!Member.roles.cache.has(cfg.Roles.minecraft)) {
      await Member.roles.add(cfg.Roles.minecraft)
      return menu.reply.send('Aşağıdaki roller başarıyla üstünüze eklendi:\n\n• '+menu.values[0]+'', true)
    } else if(Member.roles.cache.has(cfg.Roles.minecraft)) {
      await Member.roles.remove(cfg.Roles.minecraft)
      return menu.reply.send("Aşağıdaki roller başarıyla üstünüzden alındı:\n\n• "+menu.values[0]+"", true)
   }
  }
  if (menu.values[0] == 'Apex Legends') {
    if (!Member.roles.cache.has(cfg.Roles.apex)) {
      await Member.roles.add(cfg.Roles.apex)
      return menu.reply.send('Aşağıdaki roller başarıyla üstünüze eklendi:\n\n• '+menu.values[0]+'', true)
    } else if(Member.roles.cache.has(cfg.Roles.apex)) {
      await Member.roles.remove(cfg.Roles.apex)
      return menu.reply.send("Aşağıdaki roller başarıyla üstünüzden alındı:\n\n• "+menu.values[0]+"", true)
   }
  }
  if (menu.values[0] == 'Rainbow Six Siege') {
    if (!Member.roles.cache.has(cfg.Roles.rainbow)) {
      await Member.roles.add(cfg.Roles.rainbow)
      return menu.reply.send('Aşağıdaki roller başarıyla üstünüze eklendi:\n\n• '+menu.values[0]+'', true)
    } else if(Member.roles.cache.has(cfg.Roles.rainbow)) {
      await Member.roles.remove(cfg.Roles.rainbow)
      return menu.reply.send("Aşağıdaki roller başarıyla üstünüzden alındı:\n\n• "+menu.values[0]+"", true)
   }
  }
  if (menu.values[0] == 'Valorant') {
    if (!Member.roles.cache.has(cfg.Roles.valorant)) {
      await Member.roles.add(cfg.Roles.valorant)
      return menu.reply.send('Aşağıdaki roller başarıyla üstünüze eklendi:\n\n• '+menu.values[0]+'', true)
    } else if(Member.roles.cache.has(cfg.Roles.valorant)) {
      await Member.roles.remove(cfg.Roles.valorant)
      return menu.reply.send("Aşağıdaki roller başarıyla üstünüzden alındı:\n\n• "+menu.values[0]+"", true)
   }
  }
  if (menu.values[0] == 'PUBG') {
    if (!Member.roles.cache.has(cfg.Roles.pubg)) {
      await Member.roles.add(cfg.Roles.pubg)
      return menu.reply.send('Aşağıdaki roller başarıyla üstünüze eklendi:\n\n• '+menu.values[0]+'', true)
    } else if(Member.roles.cache.has(cfg.Roles.pubg)) {
      await Member.roles.remove(cfg.Roles.pubg)
      return menu.reply.send("Aşağıdaki roller başarıyla üstünüzden alındı:\n\n• "+menu.values[0]+"", true)
   }
  }
  if (menu.values[0] == 'Dota 2') {
    if (!Member.roles.cache.has(cfg.Roles.dota)) {
      await Member.roles.add(cfg.Roles.dota)
      return menu.reply.send('Aşağıdaki roller başarıyla üstünüze eklendi:\n\n• '+menu.values[0]+'', true)
    } else if(Member.roles.cache.has(cfg.Roles.dota)) {
      await Member.roles.remove(cfg.Roles.dota)
      return menu.reply.send("Aşağıdaki roller başarıyla üstünüzden alındı:\n\n• "+menu.values[0]+"", true)
   }
  }
  if (menu.values[0] == 'Fortnite') {
    if (!Member.roles.cache.has(cfg.Roles.fortnite)) {
      await Member.roles.add(cfg.Roles.fortnite)
      return menu.reply.send('Aşağıdaki roller başarıyla üstünüze eklendi:\n\n• '+menu.values[0]+'', true)
    } else if(Member.roles.cache.has(cfg.Roles.fortnite)) {
      await Member.roles.remove(cfg.Roles.fortnite)
      return menu.reply.send("Aşağıdaki roller başarıyla üstünüzden alındı:\n\n• "+menu.values[0]+"", true)
   }
  }
  if (menu.values[0] == 'Gartic') {
    if (!Member.roles.cache.has(cfg.Roles.gartic)) {
      await Member.roles.add(cfg.Roles.gartic)
      return menu.reply.send('Aşağıdaki roller başarıyla üstünüze eklendi:\n\n• '+menu.values[0]+'', true)
    } else if(Member.roles.cache.has(cfg.Roles.gartic)) {
      await Member.roles.remove(cfg.Roles.gartic)
      return menu.reply.send("Aşağıdaki roller başarıyla üstünüzden alındı:\n\n• "+menu.values[0]+"", true)
   }
  }
  if (menu.values[0] == 'CS:GO') {
    if (!Member.roles.cache.has(cfg.Roles.cs)) {
      await Member.roles.add(cfg.Roles.cs)
      return menu.reply.send('Aşağıdaki roller başarıyla üstünüze eklendi:\n\n• '+menu.values[0]+'', true)
    } else if(Member.roles.cache.has(cfg.Roles.cs)) {
      await Member.roles.remove(cfg.Roles.cs)
      return menu.reply.send("Aşağıdaki roller başarıyla üstünüzden alındı:\n\n• "+menu.values[0]+"", true)
}}})

client.on('ready', async () => {

    client.user.setPresence({ activity: { name: cfg.Bot.Durum }, status: cfg.Bot.Status })
    let VoiceChannelID = client.channels.cache.get(cfg.Channels.VoiceChannelID)
    if (VoiceChannelID) VoiceChannelID.join().catch(() => { })
    console.log(`(${client.user.username}) adlı hesapta [${client.guilds.cache.get(cfg.Server.GuildID)}] adlı sunucuda giriş yapıldı. ✔`)
    
    });
    
    client.login(cfg.Bot.Token).catch(() => console.error("Bota giriş yapılırken başarısız olundu!"));
