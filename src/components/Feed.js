import React, { useState, useEffect } from 'react'
import { Stack, Box, Typography } from "@mui/material"
import SideBar from './SideBar'
import Videos from "./Videos"
import { fetchFromAPI } from "../Utils/fetchFromApi"

const Feed = () => {

    const [selectedCategory, setSelectedCategory] = useState("New")
    const [videos, setVideos] = useState([])

    useEffect(() => {
        setVideos(null);
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => setVideos(data.items))
    }, [selectedCategory]);

    return (
        <Stack sx={{ flexDirection: { sx: "column", md: "row " } }}>
            <Box sx={{
                height: { sx: "auto", md: "92vh" },
                borderRight: "2px solid #3d3d3d",
                px: { sx: 0, md: 2 },
            }}>
                <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                <Typography className='copyright'
                    variant="body2"
                    sx={{ mt: 1.5, color: "#fff" }}>Copyright 2022 @Tarun</Typography>
            </Box>
            <Box p={2}
                sx={{
                    height: "100vh", flex: 2
                }}>
                <Typography fontSize="30px" mb={2} fontWeight={500} sx={{ color: "white" }}>
                    {selectedCategory} <span style={{ color: "#F31503" }}>videos</span>
                </Typography>
                <Videos videos={videos} />
            </Box>

        </Stack>
    )
}

export default Feed