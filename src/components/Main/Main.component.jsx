import { Box, Grid } from "@mui/material";
import { useState } from "react";
import DataShow from "../DataShow/DataShow.component";
import Filter from "../Filter/Filter.component";

const Main = () => {
    const [data,setData] = useState(null)


    return ( <div style={{width: "100%"}}>
        <div style={{textAlign: "center"}}>
        <h4> This is just an MVP </h4>
        <p> I hope you would like this small MVP once we have a contract we can move forward to more complex features.  </p>
        <q> thank you </q><br /><q> Soulaimane </q>
        </div>
        <br />
        <br />
      <Grid container spacing={2}>
        <Grid item md={3} sx={{ overflow: "hidden" ,width: "100%"}}>
            <Filter setData={setData}/>
        </Grid>
        <Grid item md={8}>
            <DataShow data={data}/>
        </Grid>
    </Grid>
    
    </div> );
}
 
export default Main;