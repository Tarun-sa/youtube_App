import React, { useState, useEffect } from 'react'
import { Box, Typography } from "@mui/material"
import Videos from "./Videos"
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from "../Utils/fetchFromApi"

const SearchFeed = () => {
    const { searchTerm } = useParams();


    const [videos, setVideos] = useState([])

    useEffect(() => {
        setVideos(null);
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
            .then((data) => setVideos(data.items))
    }, [searchTerm]);

    return (
        <Box p={2}
            sx={{
                height: "100vh", flex: 2
            }}>
            <Typography fontSize="30px" mb={2} fontWeight={500} sx={{ color: "white" }}>
                Search Result for <span style={{ color: "#F31503" }}>{searchTerm}</span>
            </Typography>
            <Videos videos={videos} />
        </Box>
    )
}

export default SearchFeed