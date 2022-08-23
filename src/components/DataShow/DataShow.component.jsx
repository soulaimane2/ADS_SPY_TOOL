import Carda from "./Card.component"
import Grid from "@mui/material/Grid"
const DataShow = ({data}) => {

    const dataFetched = data ? data.data : []

    return (
      <Grid container spacing={2}>
        {dataFetched.length !== 0 ? (
          dataFetched.map((dat) => (
            <Grid item md={4} sm={2}  key={dat.id}>
              <Carda 
              ad_snapshot_url={dat.ad_snapshot_url} 
              ad_delivery_start_time={dat.ad_delivery_start_time}
              ad_creation_time={dat.ad_creation_time}
              ad_creative_bodies={dat.ad_creative_bodies}
              ad_creative_link_captions={dat.ad_creative_link_captions}
              />
            </Grid>
          ))
        ) : (
          <h3> No data to show </h3>
        )}
      </Grid>
    );
}
 
export default DataShow;