import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Videos from "./Videos";
import { fetchFromAPI } from "../Utils/fetchFromApi";
import Loader from "./Loader"

const VideoDetail = () => {

    const { id } = useParams();
    const [videosDetail, setVideosDetail] = useState([])
    const [suggestedVideos, setSuggestedVideos] = useState(null)

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => { setVideosDetail(data.items[0]) })
        // suggested videos API call
        fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
            .then((data) => setSuggestedVideos(data.items))
    }, [id])

    // if data is loading show the Loader till then


    if (!videosDetail?.snippet)
        return <Loader />

    const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videosDetail;
    return (
        <Box minHeight="95vh">
            <Stack direction={{ xs: "column", md: "row" }}>
                {/* first item of main stack */}
                <Box flex={1}>
                    <Box width="100%" position="sticky" top="84px">
                        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
                            controls
                            className='react-player' />
                        <Typography color="#fff" variant="h5" fontWeight={500} p={2}>
                            {title}
                        </Typography>
                        <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} >

                            <Link to={`/channel/${channelId}`}>
                                <Typography variant="subtitle2" color="#fff" >
                                    {channelTitle}
                                    <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                                </Typography>
                            </Link>

                            <Stack direction="row" gap="20px" alignItems="center">
                                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                                    {parseInt(viewCount).toLocaleString()} views
                                </Typography>
                                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                                    {parseInt(likeCount).toLocaleString()} likes
                                </Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>
                {/* second Item of main stack */}
                <Box px={2} py={{ md: 1, sm: 5 }} justifyContent="center" alignItems="center">
                    <Videos videos={suggestedVideos} direction="column" />
                </Box>
            </Stack>
        </Box>
    )
}

export default VideoDetail