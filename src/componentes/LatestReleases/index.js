import { books } from "../LatestReleases/dataLatestReleases";
import styled from "styled-components";
import {Title} from "../Title";
import RecomendationCard from "../RecomendationCard";
import bookImage from "../../images/livro2.png" 

const LatestReleasesContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NewBooksContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function LatestReleases() {
    return (
        <LatestReleasesContainer>
            <Title 
                color="#EB9B00" 
                fontSize="36px" 
            >
                LATEST RELEASES
            </Title>
                <NewBooksContainer>
                    {books.map( book => (
                        <img src={book.src}/>
                    ))}
                </NewBooksContainer>
                <RecomendationCard
                    title="Maybe you will like"
                    subtitle="Angular 11"
                    description="Building an application with Google Platform"
                    image={bookImage}
                ></RecomendationCard>
        </LatestReleasesContainer>
    )
}

export default LatestReleases;