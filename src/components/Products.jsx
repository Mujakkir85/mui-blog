import React from 'react';
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
    Stack,
    colors,
    Grid,
    Box,
    Container, Modal
} from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
};


const Products = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
         //columns={{ xs: 4, sm: 8, md: 12 }}
        <Container sx={{marginTop: '15px'}}>
            <Grid Grid container spacing={{ xs: 2, md: 3 }} >
                <Grid item xs={12} sm={6} md={4} >

        <Card sx={{ maxWidth: 345 }} >
            <CardMedia
                component="img"
                height="140"
                image="https://img.freepik.com/free-photo/blue-car-speed-motion-stretch-style_53876-126850.jpg?w=996&t=st=1662723829~exp=1662724429~hmac=9398d9e09ebe7f9175d9af8dc34645fd2cb1d22daa3e840c94f510b74bcf06d0"
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button sx={{color: 'red'}}>Buy Now</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} >

                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://img.freepik.com/free-photo/blue-car-speed-motion-stretch-style_53876-126850.jpg?w=996&t=st=1662723829~exp=1662724429~hmac=9398d9e09ebe7f9175d9af8dc34645fd2cb1d22daa3e840c94f510b74bcf06d0"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button sx={{color: 'red'}}>Buy Now</Button>
                            <div>
                                <Button onClick={handleOpen}>Show Details</Button>
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style}>
                                        <Typography id="modal-modal-title" variant="h6" component="h2">
                                            Text in a modal
                                        </Typography>
                                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                        </Typography>
                                    </Box>
                                </Modal>
                            </div>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} >

                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://img.freepik.com/free-photo/blue-car-speed-motion-stretch-style_53876-126850.jpg?w=996&t=st=1662723829~exp=1662724429~hmac=9398d9e09ebe7f9175d9af8dc34645fd2cb1d22daa3e840c94f510b74bcf06d0"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button sx={{color: 'red'}}>Buy Now</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} >

                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://img.freepik.com/free-photo/blue-car-speed-motion-stretch-style_53876-126850.jpg?w=996&t=st=1662723829~exp=1662724429~hmac=9398d9e09ebe7f9175d9af8dc34645fd2cb1d22daa3e840c94f510b74bcf06d0"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button sx={{color: 'red'}}>Buy Now</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} >

                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://img.freepik.com/free-photo/blue-car-speed-motion-stretch-style_53876-126850.jpg?w=996&t=st=1662723829~exp=1662724429~hmac=9398d9e09ebe7f9175d9af8dc34645fd2cb1d22daa3e840c94f510b74bcf06d0"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button sx={{color: 'red'}}>Buy Now</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} >

                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://img.freepik.com/free-photo/blue-car-speed-motion-stretch-style_53876-126850.jpg?w=996&t=st=1662723829~exp=1662724429~hmac=9398d9e09ebe7f9175d9af8dc34645fd2cb1d22daa3e840c94f510b74bcf06d0"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button sx={{color: 'red'}}>Buy Now</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} >

                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://img.freepik.com/free-photo/blue-car-speed-motion-stretch-style_53876-126850.jpg?w=996&t=st=1662723829~exp=1662724429~hmac=9398d9e09ebe7f9175d9af8dc34645fd2cb1d22daa3e840c94f510b74bcf06d0"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button sx={{color: 'red'}}>Buy Now</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>


        </Container>
    );
};

export default Products;
