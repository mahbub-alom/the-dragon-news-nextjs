import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import topNewsImg from "@/assets/top-news.png";
import topNewsImg2 from "@/assets/top-news2.png";
import Image from "next/image";

const LatestNews = () => {
  return (
    <Box className="w-full py-5">
      <Card className="mb-5">
        <CardMedia>
          <Image src={topNewsImg} width={800} alt="top news" />
        </CardMedia>
        <CardContent>
          <p className="w-[100px] bg-red-500 px-2 text-white my-5 rounded">
            Technology
          </p>
          <Typography gutterBottom variant="h5" component="div">
            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
          </Typography>
          <Typography className="my-2">
            By Mahbub Alom - July 27 2024
          </Typography>
          <Typography variant="body2" color="text.secondary">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.......
          </Typography>
        </CardContent>
      </Card>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Card>
            <CardMedia>
              <Image src={topNewsImg2} width={800} alt="top news" />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
              </Typography>
              <Typography className="my-2">
                By Mahbub Alom - July 27 2024
              </Typography>
              <Typography variant="body2" color="text.secondary">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its
                layout.......
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardMedia>
              <Image src={topNewsImg} width={800} alt="top news" />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
              </Typography>
              <Typography className="my-2">
                By Mahbub Alom - July 27 2024
              </Typography>
              <Typography variant="body2" color="text.secondary">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its
                layout.......
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardMedia>
              <Image src={topNewsImg} width={800} alt="top news" />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
              </Typography>
              <Typography className="my-2">
                By Mahbub Alom - July 27 2024
              </Typography>
              <Typography variant="body2" color="text.secondary">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its
                layout.......
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardMedia>
              <Image src={topNewsImg} width={800} alt="top news" />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
              </Typography>
              <Typography className="my-2">
                By Mahbub Alom - July 27 2024
              </Typography>
              <Typography variant="body2" color="text.secondary">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its
                layout.......
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LatestNews;
