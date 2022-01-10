
import { useGetPhotosQuery, useUpdatePhotoMutation } from '../../services/api';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Avatar from '@material-ui/core/Avatar';
import { cardStyles } from './CardStyle';
import { Grid, Box } from '@material-ui/core';
import './Card.module.scss'
import { Loader } from '../Loader/Loader';



export const Cards = () => {
    const classes = cardStyles()
    const { data, isFetching } = useGetPhotosQuery('id')
    if (isFetching) return <Loader />
    console.log(data)



    return (
        <Box className={classes.gridContainer}>
            <Grid container spacing={3} >
                {data?.map((photo: any, id: React.Key | null | undefined) => (
                    <Grid item xs={12} sm={6} md={4} key={id}>



                        <Card style={{}} className={classes.root} >
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        {photo.id}
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <EditIcon />
                                    </IconButton>
                                }
                                title={photo.title}

                            />
                            <CardMedia
                                className={classes.media}
                                image={photo.thumbnailUrl}
                                title=""
                            />
                        </Card>


                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}
