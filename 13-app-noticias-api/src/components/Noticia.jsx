import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2


export const Noticia = ({ noticia }) => {
    // console.log(noticia);
    const { author, title, urlToImage, url } = noticia;


    return (
        <Grid md={3} lg={4}>
            <Card >
                <CardContent>
                    <Typography variant='h5' component={'h4'} color={'error'} marginY={2}>{author}</Typography>
                    <Typography variant="body1">
                        {title}
                    </Typography>
                </CardContent>
                <CardActions
                    sx={{
                        paddingInline: 2,
                    }}
                >
                    <Link
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        variant='button'
                        underline='hover'
                        color={'primary'}
                        width={'100%'}
                        textAlign='right'
                        fontWeight={700}
                    >
                        {'Read more'}
                    </Link>
                </CardActions>

            </Card>
        </Grid>

    )
}


