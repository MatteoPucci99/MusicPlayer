import { Button, Col, Container, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"


const Favourites = ()=>{

    const dispatch = useDispatch()
    const favourite = useSelector(state=> state.jobs.favourites)

    return (
    <Container>

  
        {favourite.map((job,index)=>{
            return(
                
            <Row key={index} className="border rounded-3 mt-4 p-3 justify-content-between">
                <Col >
                    <Link to={`/${job.company_name}`}>{job.company_name}</Link>
                </Col>
                <Col className="text-center">
                    <a href={job.url} target="_blank" rel="noreferrer">
                      {job.title}
                    </a>
                </Col>
                <Col className="text-center">
                <Button variant="danger" onClick={()=>{
                    dispatch({
                        type: 'DELETE_FAVOURITE',
                        payload: index
                    })
                }}>Delete</Button>
                </Col>

               
            </Row>
                    )    
                     })}

    </Container>
    )
}

export default Favourites