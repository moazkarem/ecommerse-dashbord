
import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";

import Grid from "@mui/material/Grid";

import { IconButton } from "@mui/material";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";

import LineCharts from "../../Linescharts/LineCharts";
const RightSide = () => {
  return (
    <Grid item xs={12} sm={3}>
          <Paper sx={{ width: "100%", p: 1 , height:'190px'}}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <IconButton
                sx={{
                  color: "#9AE7F7",
                  backgroundColor: "#24445C",
                }}
              >
                <FolderCopyIcon />
              </IconButton>

              <IconButton
                sx={{
                  color: "#9AE7F7",
                  backgroundColor: "#24445C",
                }}
              >
                <FolderCopyIcon />
              </IconButton>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: { xs: "wrap", sm: "wrap", lg: "nowrap" },
              }}
            >
              <div>
                <h1
                  style={{
                    color: "#C5C5D5",
                    fontWeight: "bold",

                    fontSize: "18px",
                  }}
                >
                  Sales
                </h1>
                <h1
                  style={{
                    color: "#C5C5D5",
                    fontWeight: "bold",

                    fontSize: "20px",
                  }}
                >
                  $4.598
                </h1>
                <h1
                  style={{
                    color: "#C5C5D5",
                    fontWeight: "bold",

                    fontSize: "15px",
                  }}
                >
                  25.8
                </h1>
              </div>
              <LineCharts width={'70%'} height={'140px'} colore={'#71dd37'}/>
            </Box>
          </Paper>
        </Grid>
  )
}

export default RightSide
