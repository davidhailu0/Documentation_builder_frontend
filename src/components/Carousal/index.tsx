import React from 'react';
import Carousel from 'react-material-ui-carousel';
import FirstImage from '../../images/FirstImage.jpg';
import SecondImage from '../../images/SecondImage.jpg';
import ThirdImage from '../../images/FourthImage.jpg';
import './Carousal.scss';

import {
    Card,
    CardMedia,
    Grid,
} from '@mui/material';


const Example = () => {
    return (
            <Carousel
                className="Example"
                indicators={false} navButtonsAlwaysInvisible={true}
            >
                {
                    items.map((item, index) => {
                        return <Banner item={item} key={index} />
                    })
                }
            </Carousel>
    );
}


type Item = {
    Name: string, Image: string
}

interface BannerProps
{
    item: Item,
    length?: number,

}


const Banner = (props: BannerProps) => {

        const media = (
            <Grid item xs={12} >
                <CardMedia
                    className="Media"
                    image={props.item.Image}
                    title={props.item.Name}
                >
                </CardMedia>
            </Grid>
        )
    return (
        <Card raised className="Banner">
            <Grid container spacing={0} className="BannerGrid">
                {media}
            </Grid>
        </Card>
    )
}

const items: Item[] = [
    {
                Name: "First Picture",
                Image: FirstImage
    },
    {
                Name: "Second Picture",
                Image: SecondImage
    },
    {
                Name: "Third Picture",
                Image: ThirdImage
    },
]


export default Example;