import React, { useState, Fragment } from 'react';
import BotCard from './BotCard';
import robot from "../database/db.json"

function BotCollection () {

// Retrieve data from the db.json file when adding and editing files
const [robots, setRobots] = useState (robot);
const [addBots, setBots] = useState (robot);
const [editBotId, setBotId] = useState(null);
const [editBotData, setBotData] = useState (
    {
        name: '',
        health: '',
        damage: '',
        armor: '',
        bot_class: '',
        catchphrase: '',
        avatar_url: '',
        created_at: '',
        updated_at: ''
    }
);

  return (
    <div className='bot-container'>
        {robots.map((robot) => (
            <Fragment>
            <BotCard 
            robot = {robot} />
          </Fragment>
        ))
        }
    </div>
  )
}

export default BotCollection