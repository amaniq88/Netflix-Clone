import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap/';
import { useRef } from 'react';

function ModalMovie(props) {

    const commentRef = useRef();
    function handleCaption(e) {
        e.preventDefault()
        const userCaption = commentRef.current.value;
        ;
        const newData = { ...props.meme, userCaption };
        props.updateCaption(newData, props.meme.id);
        console.log(1111111111,props.meme)
    }

    async function addToFavorite(meme){
        try{
            const res = await fetch(`https://movie-amani88.herokuapp.com/addMovie`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title : meme.title,
                    image : meme.poster_path,
                    comment : meme.caption,

                })
                

            })
            const data = await res.json();
            console.log(data);




        } catch (error) {
            console.log("error", error);
        }
    }


    return (
        <>
            <Modal show={props.show} onHide={() => { props.handleColse() }}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.meme.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img width='100%' src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${props.meme.poster_path}`} alt={props.meme.name} />
                    <p>{props.meme.topText ? props.meme.topText : "No Text Provided"}</p>
                    <p>{props.meme.caption}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Captions:</Form.Label>
                        <Form.Control ref={commentRef} type="textarea" placeholder={props.meme.caption ? props.meme.caption : "Add Your Caption Here..."} />
                    </Form.Group>
                    <Button className="addBtn" variant="primary" type="submit" onClick={handleCaption}  >
                        Add a Caption
                    </Button>
                    <Button variant="primary" onClick={()=> addToFavorite(props.meme)}>
                        add to fav
                    </Button>
                    <Button variant="secondary" onClick={props.handleColse}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalMovie; 