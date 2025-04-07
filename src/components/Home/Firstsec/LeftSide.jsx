import { Box, Paper, Typography } from "@mui/material";
import Button from "../../../Ui/Button";
import img1 from "../../../assets/img/img1.png";
import Grid from "@mui/material/Grid";
const LeftSide = () => {
  return (
    <Grid item xs={12} sm={6}>
      <Paper
        sx={{
          width: "100%",
          p: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: { lg: "nowrap", md: "nowrap", xs: "wrap" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography variant="h5" mb={1}>
            Congratulaton Moaz ❤
          </Typography>
          <Typography variant="p" mb={1}>
            You have done 72% more sales today. Check your new badge in your
            profile.
          </Typography>
          <Button
            styles={" border border-solid border-[#696CFE] text-[#5A5CD1] "}
          >
            Moaz karem
          </Button>
        </Box>
        <img src={img1} alt="image" />
      </Paper>
    </Grid>
  );
};

export default LeftSide;
