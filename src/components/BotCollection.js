import React, { useState, Fragment } from 'react';
import BotCard from './BotCard';
import robot from "../database/db.json"
import YourBotArmy from './yourbotarmy';

function BotCollection () {

  // Retrieve data from the db.json file when adding and editing files & track enlisted and unenlisted bots

  const [robots, setRobots] = useState (robot);
  const [enlistedBots, setEnlistedBots] = useState([]);
  const [selectedBotId, setSelectedBotId] = useState(null);
  const [addData, setBotData] = useState (
    {
        name: '',
        health: '',
        damage: '',
        armor: '',
        bot_class: '',
        catchphrase: '',
        avatar_url: ''
    }
  );

  // Create a function to enlist bots to the collection
  const handleAddBot = (event, robot) => {
    event.preventDefault();

    if (!enlistedBots.some((bot) => bot.id === robot.id)) {
      const enlistedBot = {
        id: robot.id,
        name: robot.name,
        health: robot.health,
        damage: robot.damage,
        armor: robot.armor,
        bot_class: robot.bot_class,
        catchphrase: robot.catchphrase,
        avatar_url: robot.avatar_url
      }
      setEnlistedBots([...enlistedBots, enlistedBot]);
    } else {
      setSelectedBotId(robot.id);
    }
  };

  return (
    <div className='bot-container'>
      {robots.map((robot) => (
        <Fragment key={robot.id}>
          <BotCard  robot={robot} handleAddBot={handleAddBot} />
        </Fragment>
      ))}
      {enlistedBots.map((bot) => (
        <Fragment key={bot.id}>
          <YourBotArmy  bot={bot} isSelected={bot.id === selectedBotId}/>
        </Fragment>
      ))}
    </div>
  );
}

export default BotCollection;
