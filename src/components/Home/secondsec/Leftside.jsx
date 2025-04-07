import { Box, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Barchartes from "../../BarChartes/Barchartes";
import Button from "../../../Ui/Button";
import img1 from "../../../assets/img/cir.png";
import { IconButton } from "@mui/material";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
const Leftside = () => {
  return (
    <Grid item xs={12} sm={6}>
      <Paper
        sx={{
          width: "100%",
          p: 2,
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Box sx={{ width: "70%"  }}>
            <Typography sx={{color: "rgpa(235 , 235 , 219 , .6)"}}>Total Renevue</Typography>
            <Barchartes width={'100%'} height={'340px'} showaxisandgrids={true}/>
          </Box>
          <Box
            display={"flex"}
            ml={2}
            justifyContent={"space-around"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <Button
              styles={" border border-solid border-[#696CFE] text-[#5A5CD1] "}
            >
              Moaz karem
            </Button>

            <img src={img1} className="w-96" />
            <Typography
              sx={{ color: "rgpa(235 , 235 , 219 , .6)" }}
              variant="body1"
            >
              62% Company Growth
            </Typography>
            <Box display={"flex"} width={"100%"}>
              <Box width={"45%"} sx={{ display: "flex" }}>
                <IconButton
                  sx={{
                    mr: 2,
                    color: "#9AE7F7",
                    backgroundColor: "#24445C",
                  }}
                >
                  <FolderCopyIcon />
                </IconButton>
                <Box>
                  <Typography sx={{ color: "rgpa(219 , 219 , 235 , .6)" }}>
                    {" "}
                    2024{" "}
                  </Typography>
                  <Typography sx={{ color: "rgpa(219 , 219 , 235 , .87)" }}>
                    {" "}
                    $32.5k{" "}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex" }}>
                <IconButton
                  sx={{
                    mr: 2,
                    color: "#9AE7F7",
                    backgroundColor: "#24445C",
                  }}
                >
                  <FolderCopyIcon />
                </IconButton>
                <Box>
                  <Typography sx={{ color: "rgpa(219 , 219 , 235 , .6)" }}>
                    {" "}
                    2023{" "}
                  </Typography>
                  <Typography sx={{ color: "rgpa(219 , 219 , 235 , .87)" }}>
                    {" "}
                    $52.5k{" "}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Leftside;
