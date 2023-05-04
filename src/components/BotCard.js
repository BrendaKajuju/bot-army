//component used to display all bots
import React, { useState, useEffect, useContext } from 'react';
import axios from "axios";
import { Botcontext } from "../context/Context"
import { Card, Grid, Row, Text, Button, Spacer, Progress } from "@nextui-org/react";

const BotCard = () => {
  //Retrieve data from db.json
  const [data, setdata] = useState([]);

  //Add function to fetch data from db.json
  const fetchData = async () => {
    const response = await axios.get("http://localhost:8001/bots");
    setdata(response.data);
    console.log(data);
  };
  //Display the data on the main page
  useEffect(() => {
    fetchData();
  }, []);
  const Globalstate = useContext(Botcontext);
  const dispatch = Globalstate.dispatch;
  console.log(Globalstate);
  return (
 <div className='bots'>
{data.map((bots, index) => {
  return(
    <Grid className='card' key={index}> 
    <Grid.Container gap={2} justify="flex-start" >
      <Grid xs={6} sm={5}>
        <Card isPressable>
          <Card.Body css={{ mt: 0 }}>
            <Card.Image
              src={bots.avatar_url}
              objectFit="cover"
              width="100%"
              height={250}
              alt={bots.bot_class}
            />
            <Text b>{bots.name}</Text>
            <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>{bots.bot_class}</Text>
            <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>{bots.catchphrase}</Text>
            <Grid>
              <Text color="success" small b>Health</Text>
              <Progress value={bots.health} color="success" status="success" />
              <Text color="error" small b>Damage</Text>
              <Progress value={bots.damage} color="error" status="error" />
              <Text color="warning" small b>Armor</Text>
              <Progress value={bots.armor} color="warning" status="warning" />
            </Grid>
          </Card.Body>
          <Card.Footer css={{ justifyItems: "flex-start" }}>
            <Row wrap="wrap" justify="space-between" align="center">
            </Row>
            <Spacer y={2} />
            <Row wrap="wrap" justify="space-between" align="center">
                <Button color="gradient" 
                auto ghost 
                onClick={() => dispatch({ type: "ADD", payload: bots })}>Join the Force</Button>
            </Row>          
          </Card.Footer>
        </Card>
      </Grid>
    </Grid.Container>
  </Grid>
  )
})}
 </div>
  );
};

export default BotCard;
