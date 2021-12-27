import { Card, CardMedia } from '@mui/material';

function ImageTemplate(props) {
  return (
    <Card sx={{width:150, margin:'auto'}} variant="outlined">
      <CardMedia
        component={props.component}
        height={props.height}
        image={props.image}
        alt={props.alt}
        padding={props.padding}
      />
    </Card>

  );
}

export default ImageTemplate;
