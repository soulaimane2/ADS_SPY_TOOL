import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Carda(props) {
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="180"
        image="https://via.placeholder.com/180"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          AD COPY
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.ad_creative_bodies}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><a href={props.ad_snapshot_url} target="_blank">Check the original post</a></Button>
        <Button size="small"><a href={"http://"+props.ad_creative_link_captions} target="_blank">Call to action link</a></Button>
      </CardActions>
    </Card>
  );
}
