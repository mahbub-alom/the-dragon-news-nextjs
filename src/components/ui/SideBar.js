import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import sideBarImg from "@/assets/side-top-news.png";
import blankImage from "@/assets/blankImage.png";
import sideBottomImg from "@/assets/side-bottom-img.png";

const SideBar = () => {
  return (
    <Box className="w-full my-5">
      <Card className="mb-5">
        <CardMedia>
          <Image src={sideBarImg} width={800} alt="top news" />
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
            the readable content of a page when looking at it's layout.......
          </Typography>
        </CardContent>
      </Card>
      <Grid className="border-b-2 border-t-2 border-gray-300 ms-1 m-1 pb-5"  container spacing={2}>
        <Grid item xs={6} md={4}>
          <Image src={blankImage} width={100} alt="blank image"/>
        </Grid>
        <Grid item xs={6} md={8}>
        <Typography className="mb-2">
            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it.
          </Typography>
        <Typography>
        July 27 2024
          </Typography>
        </Grid>
      </Grid>
      <Grid className="border-b-2 border-gray-300 ms-1 m-1 pb-5"  container spacing={2}>
        <Grid item xs={6} md={4}>
          <Image src={blankImage} width={100} alt="blank image"/>
        </Grid>
        <Grid item xs={6} md={8}>
        <Typography className="mb-2">
            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it.
          </Typography>
        <Typography>
        July 27 2024
          </Typography>
        </Grid>
      </Grid>
      <Grid className="border-b-2 border-gray-300 ms-1 m-1 pb-5"  container spacing={2}>
        <Grid item xs={6} md={4}>
          <Image src={blankImage} width={100} alt="blank image"/>
        </Grid>
        <Grid item xs={6} md={8}>
        <Typography className="mb-2">
            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it.
          </Typography>
        <Typography>
        July 27 2024
          </Typography>
        </Grid>
      </Grid>
      <Grid className="border-b-2 border-gray-300 ms-1 m-1 pb-5"  container spacing={2}>
        <Grid item xs={6} md={4}>
          <Image src={blankImage} width={100} alt="blank image"/>
        </Grid>
        <Grid item xs={6} md={8}>
        <Typography className="mb-2">
            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it.
          </Typography>
        <Typography>
        July 27 2024
          </Typography>
        </Grid>
      </Grid>
      <Grid className="ms-1 m-1 pb-5"  container spacing={2}>
        <Grid item xs={6} md={4}>
          <Image src={blankImage} width={100} alt="blank image"/>
        </Grid>
        <Grid item xs={6} md={8}>
        <Typography className="mb-2">
            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it.
          </Typography>
        <Typography>
        July 27 2024
          </Typography>
        </Grid>
      </Grid>
      <Image className="mx-auto" src={sideBottomImg} height={300} alt="side bottom"/>
    </Box>
  );
};

export default SideBar;
