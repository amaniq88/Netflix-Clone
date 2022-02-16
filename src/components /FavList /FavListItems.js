import { Button, Card, CardGroup } from "react-bootstrap";

function FavListItems(props){
    return(
        <>
        <CardGroup style={{ display: "flex" }}>
            {
                
                (props.favoriteList ?? []).map(meme => {
                    return (
                        <Card key={meme.id}>
                            <Card.Img variant="top" src={meme.image} />
                            <Card.Body>
                                <Card.Title>{meme.title}</Card.Title>
                                <Card.Text>
                                    {meme.caption}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )
                })
            }
            
        
        </CardGroup>
        </>
    )
}

export default FavListItems;