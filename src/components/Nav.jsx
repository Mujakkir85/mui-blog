import React from 'react';
import {AppBar, Button, IconButton, Link, Stack,Toolbar, Typography} from "@mui/material";
import {Storefront} from "@mui/icons-material";

const Nav = () => {
    return (
        <AppBar position='static'  sx={{ bgcolor: '#2E3B55'}}>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 2 }}>
                    <Storefront></Storefront>
                </IconButton>

                <Typography variant='h6' component='div' sx={{flexGrow: 1}}>
                      BANGLA SHOP
                </Typography>

                <Stack direction='row' spacing={2}
                       sx={{flexGrow: 1,
                           justifyContent: "end",
                           paddingRight: "150px" }}

                >

                    <Link  href='#Features' underline="none" color={"inherit"}>Features</Link>
                    <Link href='#' underline="none" color={"inherit"}>Products</Link>
                    <Link href='#' underline="none" color={"inherit"}>About</Link>
                    <Link href='#' underline="none" color={"inherit"}>Contact</Link>

                </Stack>
            </Toolbar>
        </AppBar>
    );
};

export default Nav;
