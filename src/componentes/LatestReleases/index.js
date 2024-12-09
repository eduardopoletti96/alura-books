import { books } from "../LatestReleases/dataLatestReleases";
import styled from "styled-components";
import {Title} from "../Title";

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
            >LATEST RELEASES</Title>
                <NewBooksContainer>
                    {books.map( book => (
                        <img src={book.src}/>
                    ))}
                </NewBooksContainer>
        </LatestReleasesContainer>
    )
}

export default LatestReleases;