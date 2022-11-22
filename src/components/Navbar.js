import React from 'react'
import { Stack } from "@mui/material"
import { Link } from "react-router-dom"
import { logo } from "../Utils/constant"
import SearchBar from './SearchBar'

const Navbar = () => {
    return (
        <Stack
            direction="row"
            p={2}
            alignItems="center"
            sx={{ position: "sticky", top: 0, justifyContent: "space-between", background: "#000" }}>
            <Link to="/">
                <img src={logo} alt="logo" height={45} />
            </Link>
            <SearchBar />
        </Stack>
    )
}

export default Navbar