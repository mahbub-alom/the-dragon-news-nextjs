import { getSingleNews } from "@/utilies/getSingleNews";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
;

const DetailsPage = async ({ params }) => {
  const { data: news } = await getSingleNews(params.newsId);
  return (
    <Box>
      <Container className="my-5">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Image
              src={news.thumbnail_url}
              alt="news"
              height={100}
              width={800}
            />
            <Grid className="my-2" container spacing={2}>
              <Grid item xs={6}>
                <Image
                  src={news.image_url}
                  alt="news"
                  height={100}
                  width={800}
                />
              </Grid>
              <Grid item xs={6}>
                <Image
                  src={news.image_url}
                  alt="news"
                  height={100}
                  width={800}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" component="h2">
              {news.title}
            </Typography>
            <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
              <Avatar
                alt="news"
                height={100}
                width={100}
                src={news.author.img}
              />
              <Typography>By {news.author.name}</Typography>
              <Typography>- {news.author.published_date}</Typography>
            </Box>
            <Typography
              style={{
                textAlign: "justify",
                whiteSpace: "pre-line",
                margin: "10px 0",
                color: "gray",
              }}
            >
              {news.details}
            </Typography>
            <Typography variant="h6">
              Many Desktop publishing packages and web pages editors now use as
              their default model txt!!!
            </Typography>
            <Typography variant="h6">- Mahbub Alom</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DetailsPage;
