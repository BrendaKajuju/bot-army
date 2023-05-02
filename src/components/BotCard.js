import React from 'react';
import { Card, Grid, Row, Text, Button, Spacer } from "@nextui-org/react";

const BotCard = ({robot}) => {

    <Grid.Container gap={2} justify="flex-start">
        <Grid xs={6} sm={3}>
          <Card isPressable>
            <Card.Body css={{ mt: 0 }}>
              <Card.Image
                src={robot.avatar_url}
                objectFit="cover"
                width="100%"
                height={200}
                alt={robot.bot_class}
              />
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap" justify="space-between" align="center">
                <Text b>{robot.name}</Text>
                <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                  {robot.bot_class}
                </Text>
              </Row>
              <Spacer y={4} />
              <Button onSubmit={handleAddBot} color="gradient" auto ghost>
          Join the Force
        </Button>
            </Card.Footer>
          </Card>
        </Grid>
    </Grid.Container>  
}

export default BotCard