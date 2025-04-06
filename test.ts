import { Fightcade } from '/fightcade-api-main/src/fightcade-api.ts';

try {
    // Print the amount of ranked matches per game for the user 'biggs'.
    const user = await Fightcade.GetUser('biggs');
    Object.entries(user.gameinfo).forEach(([gameid, gameinfo]) => {
      if (gameinfo.rank) console.log(`${gameid}: ${gameinfo.num_matches}`);
    });
  } catch(e) {
    console.error(e);
}
