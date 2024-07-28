import { Box, Container, Typography } from "@mui/material";
;
import logo from "@/assets/The Dragon News.png";
import Image from "next/image";
import { showCurrentDate } from "@/utilies/getCurrentDate";

const Header = () => {
  const currentDate = showCurrentDate();
  return (
    <Box className="w-full text-center my-5">
      <Container>
        <Image
          className="mx-auto"
          src={logo}
          alt="logo"
          height={500}
          width={500}
        />
        <Typography color="gray" variant="body2" textAlign="center" className="my-2">
          Journalism Without Fear or Favour
        </Typography>
        <Typography textAlign="center">
          {currentDate}
        </Typography>
      </Container>
    </Box>
  );
};

export default Header;
