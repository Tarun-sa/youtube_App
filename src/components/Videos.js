import React from 'react'
import { Stack, Box } from "@mui/material"
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'
import Loader from "./Loader"

const Videos = ({ videos, direction }) => {
    console.log(videos)
    if (!videos) return <Loader />
    return (
        <Stack direction={direction || "row"}
            flexWrap="wrap"
            alignItems="center"
            gap={2}
            sx={{
                justifyContent: { md: "start", xs: "center" },
                height: "100%",
                overflowY: "auto"
            }}
        >
            {videos && videos.map((item, index) => {
                return (
                    <Box key={index}>
                        {item.id.videoId && <VideoCard video={item} />}
                        {item.id.channelId && <ChannelCard channelDetail={item} />}
                    </Box>
                )
            })}
        </Stack >
    )
}

export default Videos