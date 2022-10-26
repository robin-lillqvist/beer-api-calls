import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

const BasicCard = (breweryData) => {
  const usageData = breweryData.data;
  return (
    <Card className="brewery-card" sx={{ m: 2, minWidth: 450, maxWidth: 450 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {usageData.brewery_type}
        </Typography>
        <Typography variant="h5" component="div">
          {usageData.name}
        </Typography>

        <Typography variant="body2">
        {usageData.street}, {usageData.city}, {usageData.state}, {usageData.country}
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant="contained" size="medium" href={usageData.website_url} target="_blank">
          Website
      </Button>
        <PhoneIphoneIcon sx={{ ml: 3, mr: 1 }}/> <Typography variant="body2">
        {usageData.phone}
        </Typography>
      </CardActions>
    </Card>
  );
}

export default BasicCard;