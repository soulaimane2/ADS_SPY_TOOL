import { Box, Grid } from "@mui/material";
import DataShow from "../DataShow/DataShow.component";
import Filter from "../Filter/Filter.component";

const Main = () => {
    return ( <div style={{width: "100%"}}>
      <Grid container spacing={2}>
        <Grid item md={3} sx={{ overflow: "hidden" ,width: "100%"}}>
            <Filter />
        </Grid>
        <Grid item md={8}>
            <DataShow />
        </Grid>
    </Grid>
    
    </div> );
}
 
export default Main;