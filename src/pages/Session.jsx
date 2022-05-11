import React from "react";
import { Container, Divider, Form, Grid, Header } from "semantic-ui-react";
import Console from "./Console/Console";
import SceneGrid from "./SceneGrid/SceneGrid";

const trackname = "Trackname";

const Editor = () => {
  return (
    <Form>
      <Form.TextArea disabled />
    </Form>
  );
};

const SessionPage = () => {
  return (
    <Container fluid style={{ padding: "2rem" }}>
      <Header as={"h1"}>{trackname}</Header>
      <Grid columns={2} divided>
        <Grid.Column>
          <Grid.Row>
            <SceneGrid />
          </Grid.Row>
          <Divider />
          <Grid.Row>
            <Console />
          </Grid.Row>
        </Grid.Column>
        <Grid.Column>
          <Editor />
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default SessionPage;
