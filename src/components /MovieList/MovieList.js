import { Card, CardGroup, Button } from 'react-bootstrap';
import { useState } from 'react';
import ModalMovie from '../ModalMovie/ModalMovie';

function MovieList(props) {
    const [showModal, setShowModal] = useState(false);
    const [meme, setMeme] = useState();
    console.log(props.memes.results);
    return (
        <>
            <CardGroup style={{ display: "flex", justifyContent: "space-around" }}>
                {    

                    props.memes.results.map(meme => {
                       
                        return <div key={meme.id}>
                            <Card key={meme.id} >
                            
                                <Card.Img variant="top" src= {`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${meme.poster_path}`} />
                                
                                <Card.Body>
                                    <Card.Title>{meme.title}</Card.Title>
                                    <Card.Text>
                                        {meme.overview ? meme.overview : "No text"}
                                    </Card.Text>
                                    <Card.Text>
                                        {meme.caption ? meme.caption : "No Caption Added"}
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => { setMeme(meme); setShowModal(true) }} >Show Modal</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    })
                }
            </CardGroup>
       
            {showModal && <ModalMovie show={showModal} meme={meme} handleColse={() => { setShowModal(false) }} updateCaption={props.updateCaption} />}
        </>
    )
}

export default MovieList; 