import { AppBar, Badge, Box, Button, Container, Grid, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { CartComponent } from "./cart";

export const NavBar : React.FC<{}> = () => {
    const navigate = useNavigate()
    const items = useAppSelector((state)=> state.cartReducer)
    const [open, setOpen] = React.useState<boolean>(false)

    const handleStateViewDrawer = () => {
        setOpen((state) => !state)
    }
    return (
        <Box sx={{flexGrow:1}}>
             <AppBar position="sticky"> {/*fixes o  STICKY */}
                <Toolbar>
                    <Container maxWidth="xl">
                        <Grid 
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Grid item>
                                <Typography>
                                    Rick and Morty
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Stack direction="row" spacing={2}>
                                    <IconButton
                                        color="primary"
                                        onClick={()=> handleStateViewDrawer()}
                                    >
                                        <Badge color="error" badgeContent={items.length}>
                                            <ShoppingCartOutlinedIcon />
                                        </Badge>
                                    </IconButton>
                                    <Button variant="contained" onClick={()=> navigate("login")}>
                                        Login
                                    </Button>
                                    <Button variant="outlined">
                                        Register
                                    </Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
            <CartComponent 
                open={open}
                handleStateViewDrawer={handleStateViewDrawer}
            />
        </Box>
    )
}