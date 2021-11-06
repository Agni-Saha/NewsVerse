import React, { useState, useEffect, createRef } from 'react'
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import useStyles from "./styles"
import classNames from 'classnames'

export default function NewsCard({ article, index, activeArticle }) {

    const { description, publishedAt, source, title, url, urlToImage } = article
    const demoImage = 'https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png'
    const classes = useStyles()

    const [elementRef, setElementRef] = useState([])

    const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50)

    useEffect(() => {
        setElementRef((refs) => Array(20)
            .fill()
            .map((_, j) => refs[j] || createRef())
        )
    }, [])

    useEffect(() => {
        if (index === activeArticle && elementRef[activeArticle]) {
            scrollToRef(elementRef[activeArticle])
        }
    }, [index, activeArticle, elementRef])

    return (
        <Card
            ref={elementRef[index]}
            className={classNames(classes.card,
                activeArticle === index
                    ? classes.activeCard
                    : null)
            }>
            <CardActionArea href={url} target="_blank" rel="noreferrer"
                className="card_actionarea"
            >
                <CardMedia image={urlToImage || demoImage}
                    className={classes.media}
                />
                <div className={classes.details}>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="h2">
                        {(new Date(publishedAt)).toDateString()}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="h2"
                        className="card_source">
                        {source.name}
                    </Typography>
                </div>
                <Typography gutterBottom variant="h5"
                    className={`${classes.title} card_title`}>
                    {title}
                </Typography>
                <CardContent>
                    <Typography varinat="body2" color="textSecondary" component="p"
                        className="card_desc">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" className="card_button">
                    Learn More
                </Button>
                <Typography variant="h5" color="textSecondary">
                    {index + 1}
                </Typography>
            </CardActions>
        </Card>
    )
}
