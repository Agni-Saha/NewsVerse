import React from 'react'
import { Grid, Grow, Typography } from '@material-ui/core'
import NewsCard from "../NewsCard/NewsCard"
import useStyles from './styles.js';

const infoCards = [
    { color: '#00838f', title: 'Latest News', text: 'Give me the latest general news' },
    { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Show me the latest news on Sports' },
    { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
    { color: '#283593', title: 'News by Sources', info: 'Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from BBC News' },
    { color: '#03045e', title: 'News by Country', info: 'USA, United Kingdom, India, Canada... ', text: 'What are the recent news of India' },
];


export default function NewsCardList({ articles, activeArticle }) {
    const classes = useStyles()

    if (!articles.length) {
        return (
            <Grow in>
                <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                    {
                        infoCards?.map((infoCard, index) => (
                            <Grid item xs={12} sm={6} md={4} lg={3}
                                className={classes.infoCard} key={index}
                            >
                                <div className={classes.card}
                                    style={{ backgroundColor: infoCard.color }}
                                >
                                    <Typography variant="h5" component="h5"
                                        className="cardlist_title"
                                    >
                                        {infoCard.title}
                                    </Typography>
                                    {
                                        (infoCard?.info)
                                            ? (
                                                <Typography variant="h6" component="h6">
                                                    <strong className="cardList_heading">
                                                        {infoCard.title.split(' ')[2]}:
                                                    </strong>
                                                    <br />
                                                    <span className="cardList_info" >
                                                        {infoCard.info}
                                                    </span>
                                                </Typography>
                                            )
                                            : null
                                    }
                                    <Typography variant="h6" component="h6">
                                        <span className="cardList_heading">Try saying:</span>
                                        <br /> 
                                        <i className="cardList_voice">
                                            {infoCard.text}</i>
                                    </Typography>
                                </div>
                            </Grid>
                        ))
                    }
                </Grid>
            </Grow>
        )
    }

    return (
        <Grow in>
            <Grid container alignItems="stretch" spacing={3}
                className={classes.container}
            >
                {
                    articles?.map((article, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={index}
                            style={{ display: "flex" }}
                        >
                            <NewsCard article={article} index={index} activeArticle={activeArticle} />
                        </Grid>
                    ))
                }
            </Grid>
        </Grow>
    )
}
