import React, { useState } from 'react';
import { Card, Grid, Row, Text, Button, Spacer, Progress } from "@nextui-org/react";

const BotCard = ({robot, handleAddBot}) => {
return (
          <Grid > 
<Grid.Container gap={2} justify="flex-start" >
        <Grid xs={6} sm={5}>
          <Card isPressable>
            <Card.Body css={{ mt: 0 }}>
              <Card.Image
                src={robot.avatar_url}
                objectFit="cover"
                width="100%"
                height={250}
                alt={robot.bot_class}
              />
            <Text b>{robot.name}</Text>
            <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>{robot.bot_class}</Text>
            <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>{robot.catchphrase}</Text>
                <Grid>
                <Text color="success" small b>Health</Text>
                <Progress value={robot.health} color="success" status="success" />
                <Text color="error" small b>Damage</Text>
                <Progress value={robot.damage} color="error" status="error" />
                <Text color="warning" small b>Armor</Text>
                <Progress value={robot.damage} color="warning" status="warning" />
               </Grid>
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap" justify="space-between" align="center">
              </Row>
              <Spacer y={2} />
              <Row wrap="wrap" justify="space-between" align="center">
              <Button color="gradient" auto ghost onClick={(event) => handleAddBot(event, robot)}>Join the Force</Button>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
      </Grid.Container>
    </Grid>
    )
}

export default BotCard