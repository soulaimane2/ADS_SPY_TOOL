import { Autocomplete, Button, Checkbox, Divider, FormControlLabel, FormGroup, FormLabel, Slider, TextField } from "@mui/material";
import { useState } from "react";
import api from "../../api/api";
import { ACCESS_TOKEN } from "../../secret/token";

const Filter = ({setData}) => {

    const [formik, SetFormik] = useState({
        terms: "",
        type: [],
        platforms: [],
        Languages: []
    })


    const filterIt = async (formik) => {

        const {data} = await api.get("/ads_archive",{ params : {
            access_token: ACCESS_TOKEN,
            ad_reached_countries: formik.Languages,
            search_terms: formik.terms,
            fields:"ad_creation_time,ad_creative_bodies,ad_creative_link_captions,ad_snapshot_url,demographic_distribution,estimated_audience_size"
        }})
        setData(data)
    }

    return ( <>
    
    <TextField id="standard-basic" label="search terms" variant="standard" fullWidth onChange={(e) => SetFormik(state => ({...state,terms: e.target.value}))}/>
    <br />
    <Divider />
    <br />

    <FormGroup onChange={(e) => SetFormik(state => ({...state, type: [...state.type, e.target.value]}))}>
    <FormLabel> Type :</FormLabel>
    <FormControlLabel control={<Checkbox value="ALL" />} label="ALL" />
    <FormControlLabel control={<Checkbox value={"IMAGE"}/>} label="IMAGE" />
    <FormControlLabel control={<Checkbox value={"MEME"} />} label="MEME" />
    <FormControlLabel control={<Checkbox value={"VIDEO"}/>} label="VIDEO" />
    </FormGroup>

    <br />
    <Divider />
    <br />

    <FormGroup onChange={(e) => SetFormik(state => ({...state, platforms:[...state.platforms, e.target.value]}))}>
    <FormLabel> publisher_platforms :</FormLabel>
    <FormControlLabel control={<Checkbox value="FACEBOOK"/>} label="FACEBOOK" />
    <FormControlLabel control={<Checkbox value={"INSTAGRAM"}/>} label="INSTAGRAM" />
    <FormControlLabel control={<Checkbox value={"MESSENGER"} />} label="MESSENGER" />
    <FormControlLabel control={<Checkbox value={"WHATSAPP"}/>} label="WHATSAPP" />
    </FormGroup>

    <br />
    <Divider />
    <br />

    <FormLabel> Languages:</FormLabel>
    <br />
    <br />
    <Autocomplete
        multiple
        id="tags-outlined"
        options={Countries}
        getOptionLabel={(option) => option.title}
        filterSelectedOptions
        onChange={(event, value) => SetFormik(state => ({...state, Languages: [...state.Languages, value[0].abrv]}))}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Countries"
            placeholder="Countries"
          />
        )}
      />
<br />
    <Divider />
    <br />  
      <Button onClick={() => filterIt(formik)} variant="contained" fullWidth> Filter </Button>
    </> );
}
 


const Countries = [
    { title: 'Brazil', abrv: "BR" },
    { title: 'Sweden', abrv: "SE" },
    { title: 'Spain', abrv: "ES" },
    { title: 'Norway', abrv: "NO" },
    { title: 'New Zealand', abrv: "NZ" },
    { title: 'United States', abrv: "US" },
]

export default Filter;