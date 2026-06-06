const { SlashCommandBuilder } = require('discord.js');

// ここにランダムに送るワードを追加していく
const mission = [
  "ミッション：ダイヤモンドx5",
  "ミッション：TNTx16",
  "ミッション：エンダーパールx16",
  "ミッション：金のリンゴx2",
  "ミッション：耐火のポーションx1",
  "ミッション：テラコッタx16",
  "ミッション：ディテクターレールx1",
  "ミッション：クロスボウx6",
  "ミッション：釣り竿x16",
  "ミッション：ベッドx3"
];

module.exports = {
  data: new SlashCommandBuilder()
    .setName('getmission')
    .setDescription('ランダムなミッションをDMで送ります'),

  async execute(client, interaction) {
    const topic = mission[Math.floor(Math.random() * mission.length)];

    try {
      await interaction.user.send(`🎲 **ランダムミッション**\n${topic}`);
      await interaction.reply({ content: 'DMにミッションを送りました。', ephemeral: true });
    } catch (error) {
      console.error('DM送信失敗:', error);
      await interaction.reply({
        content: 'DMを送れませんでした。DMの受信設定を確認してください。',
        ephemeral: true,
      });
    }
  },
};