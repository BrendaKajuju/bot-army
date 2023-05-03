import React, { useState, useEffect } from 'react';
import BotCard from './BotCard';
import robot from "../database/db.json"
import YourBotArmy from './yourbotarmy';
import { nanoid } from 'nanoid';

function BotCollection () {

// Retrieve data from the db.json file when adding and editing files
const [robots, setRobots] = useState (robot);
const [editRobotId, setRobotId] = useState(null);
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

// Create a function to add bot to the collection
const handleAddBot = (event, robot) => {
event.preventDefault();
setRobotId(robot.id);

const robotarmy = {
  key: robot.id,
  name: robot.name,
  health: robot.health,
  damage: robot.damage,
  armor: robot.armor,
  bot_class: robot.bot_class,
  catchphrase: robot.catchphrase,
  avatar_url: robot.avatar_url
}
setBotData(robotarmy)
}
  return (
    <div className='bot-container'>
        {robots.map((robot) => (
          <Fragment>
           <BotCard  robot = {robot}/>
          </Fragment>
        ))}
    </div>
)}
export default BotCollection