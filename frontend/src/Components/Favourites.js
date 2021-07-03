import React from 'react';

//Style Sheets
//Import Bootstrap Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export default function Favourites({favourites, deleteFavourite}) {

    function formatKind(kind) { //Function to format the media type string thats returned.
        if (kind == null || kind === '') {
            return '';
        }
        const splitArray = kind.split('-');
        let result = '';
        splitArray.forEach((item, index) => {
            result += item[0].toUpperCase() + item.substring(1);
            if (index !== splitArray.length - 1) {
                result += ' ';
            }
        });
        return result;
    }

    return (
        <div>
            <div className ="FavWrapper">
                <div className="FavContent">
                  <div className="FavHeader">
                    <h1 className="FavHeading">FAVOURITES</h1>
                  </div>
                  <Table responsive hover variant="dark" size="lg" key={favourites}>
                <thead className="TableHead">
                    <tr>
                        <th colSpan="2">Title</th>
                        <th>Artist</th>
                        <th>Type</th>
                        <th>ID</th>
                    </tr>
                </thead>
                <tbody>
                    {favourites.map(favourite => ( //Map through the favourites array -> input favourites into table element.
                        <tr key={favourite.trackId}>
                            <td colSpan="2">{favourite.trackName}</td>
                            <td>{favourite.artistName}</td>
                            <td>{formatKind(favourite.kind)}</td>
                            <td>{favourite.trackId}</td>
                        </tr>
                    ))}

                </tbody>
            </Table>
                </div>
                {/*Form for user to input id and trigger DELETE*/}
                <Form.Group>
                <Form.Label >Want to remove a favourited item?</Form.Label>
                <Form.Control type="number" placeholder="Enter ID" id="id" name="id"/>
                <br />
            </Form.Group>
            
            {/*Button that actions DELETE*/}
            <Button style={{ marginLeft:"5px" }} variant="dark" type="submit" onClick={() => deleteFavourite()}>
              Delete
           </Button>
              </div>
              
        </div>
    )
}
