import React from "react";
import Grid from "@material-ui/core/Grid";
import { useParams, Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

function Detail() {

  const { name } = useParams();
  const results = results.find((prod) => prod.name === name);
  return (
    <div style={{ marginTop: 20 }}>
      <Grid>
        <Card>
          <CardActionArea>
            <CardContent style={{ backgroundColor: "#cfe8fc" }}>
              <Typography>Name : {results.name}</Typography>
              <Typography>Username : {results.username}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </div>
  );
}
export default Detail;
