import React from "react";
import "./DailyImage.css"; // Create this CSS file for styling
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";

const DailyImage = () => {
   // Array of image URLs
   const images = [
      "https://i.ibb.co/KycxqzL/IMG-9168.jpg",
      "https://i.ibb.co/9wDPJJ0/IMG20240121121138.jpg",
      "https://i.ibb.co/3hzwnW0/IMG-9116.jpg",
      "https://i.ibb.co/9yQj97d/IMG-9136.jpg",
      "https://i.ibb.co/vv3Xsg3/IMG-9138.jpg",
      "https://i.ibb.co/0p7FTGh/IMG-9115.jpg",
      "https://i.ibb.co/WPFwQP5/IMG-9134.jpg",
      "https://i.ibb.co/wzNFpMC/IMG-9146.jpg",
      "https://i.ibb.co/fMxNmXK/IMG-9140.jpg",
      "https://i.ibb.co/d7T2x0g/Photo-from-Eshel-Doron.jpg",
      "https://i.ibb.co/vm4JRjR/IMG-2060.jpg",
      "https://i.ibb.co/kqX7Xbp/IMG-9161.jpg",
      "https://i.ibb.co/kxNSsKp/GPTemp-Download.jpg",
      "https://i.ibb.co/Wy7Vfr9/IMG-9170.jpg",
      "https://i.ibb.co/7znSJkR/IMG-2059.jpg",
      "https://i.ibb.co/h8s3M9X/IMG-9112.jpg",
      "https://i.ibb.co/3sTDpp2/IMG-9165.jpg",
      "https://i.ibb.co/7Q7sMST/IMG-2028.jpg",
      "https://i.ibb.co/7V33Mxp/IMG-9137.jpg",
      "https://i.ibb.co/p0xwr6W/IMG-2044.jpg",
      "https://i.ibb.co/KD4zgdk/IMG-9148.jpg",
      "https://i.ibb.co/dJfTL3m/IMG-9113.jpg",
      "https://i.ibb.co/k0djGQV/IMG-9166.jpg",
      "https://i.ibb.co/3mh9jsW/IMG-9141.jpg"
   ];

   // Get the current day of the year
   const today = new Date();
   const dayOfYear = Math.floor(
      (today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24)
   );

   // Select an image based on the day of the year
   const imageIndex = dayOfYear % images.length;
   const todayImage = images[imageIndex];
   const startIndex = imageIndex - 5;
   const carouselImages = images.slice(startIndex, imageIndex + 1);

   // Slider settings
   const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: carouselImages.indexOf(todayImage),
   };

   return (
      <Box className="daily-image-container" sx={{ width: "80%", margin: "0 auto" }}>
         <Slider {...settings}>
            {carouselImages.map((image, index) => (
               <Box key={index} sx={{ position: "relative" }}>
                  <img
                     src={image}
                     alt={`Inspiration ${index + 1}`}
                     style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                  />
                  <Typography
                     variant="h6"
                     sx={{
                        position: "absolute",
                        bottom: 16,
                        left: 16,
                        color: "white",
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                        padding: "8px 16px",
                        borderRadius: "4px",
                     }}
                  >
                     {}
                  </Typography>
               </Box>
            ))}
         </Slider>
      </Box>
   );
};

export default DailyImage;