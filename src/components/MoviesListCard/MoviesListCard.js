import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import StarRatings from "react-star-ratings/build/star-ratings";

import {baseImgURL, movieRequests} from "../../api";



export const MoviesListCard = () => {

    const {id} = useParams();
    const [card, setCard] = useState([]);

    useEffect(() => {
        if (id) {
            movieRequests.getMovieById(id).then(({data}) => {
                console.log(data);
                if (data) return setCard(data)
            })
        }
    },[id])

    return (
        <div className={'card_block'}>
            <StarRatings
                rating={card.vote_average}
                starRatedColor="gold"
                numberOfStars={10}
                name='rating'
                starDimension="20px"
                starSpacing="5px"
            />
            {card.title}

            <div>
                <div className={'img_block'}>
                    <img src={`${baseImgURL}${card.poster_path}`} alt=""/>
                </div>
                <div className={'title_block'}>
                    <h1 className={'card_header'}>{card.title}</h1>
                    <p></p>
                </div>
                <div className={'info_block'}>
                    <p>{card.original_title}</p>
                    <p>{card.tagline}</p>
                    <p>Overview: {card.overview}</p>
                    <p>Release date: {card.release_date}</p>
                </div>
            </div>
        </div>
    );
};