import React from 'react'
import { Stack } from "@mui/material"
import { categories } from "../Utils/constant"

const SideBar = ({ selectedCategory, setSelectedCategory }) => {

    return (
        <Stack
            direction="row"
            sx={{
                flexDirection: { md: "column" },
                height: { sx: "auto", md: "95%" },
                overflowY: "auto"
            }}>
          //looping through each category
            {categories.map((category, index) => {
                return (
                    <button key={index} className="category-btn"
                        style={{
                            background: category.name === selectedCategory && "#FC1503",
                            color: "white"
                        }}
                        onClick={
                            () => { setSelectedCategory(category.name) }
                        }>
                        <span style={{
                            color: category.name === selectedCategory ? "white" : "red",
                            marginRight: "10px"
                        }}>
                            {category.icon}
                        </span>
                        <span style={{ opacity: category.name === selectedCategory ? 1 : 0.7 }}>
                            {category.name}
                        </span>
                    </button>
                )
            })}
        </Stack>
    )
}

export default SideBar