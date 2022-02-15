import React, { useEffect, useState } from "react";
import { Row, Container } from "react-bootstrap";
import MovieList from "../MovieList/MovieList";

function Home() {
    const [memes, setMemes] = useState();

    const fetchData = async () => {

        try {

            const response = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=2f1caaaa92be3db9642884fc641f0878`)
          // console.log(response);

            const data = await response.json();
         //   console.log(data);
            setMemes(data);
        } catch (error) {
            console.log("error", error);
        }
    };

    const updateCaptions = (data, id) => {
        let updatedMemes = memes.results.map(meme => {
            if (meme.id == id) {
                meme.caption = data.userCaption;
                return meme;
            }
            else return meme
        })
        setMemes(updatedMemes);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <h1>Home Page</h1>
            <main>
                {memes && (
                    <Container fluid className="main-container">
                        <Row className="flex-row">
                            <MovieList memes={memes} updateCaption={updateCaptions} />
                        </Row>
                    </Container>
                )}
            </main>
        </>
    )
}

export default Home;