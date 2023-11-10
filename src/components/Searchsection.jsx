import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import {  useSelector } from "react-redux"
import Singlealbum from "./Singlealbum"



const Searchsection = ()=>{

    const albumResults = useSelector((state)=> state.search.album)
    const [getAlbums,setGetAlbums] = useState([])

    
    const getResults = ()=>{
        if (!albumResults) { 
            return;
          }
        fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${albumResults}`)
        .then(res=>{
            if(res.ok){
                return res.json()
            } else {
                throw new Error ('Errore nel caricamento degli album')
            }
        })
        .then(data=>{
            console.log(data)
            setGetAlbums(data.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        getResults()
       
    },[albumResults])



    return (
        <Row>
            {getAlbums.map((el)=>{
                return(
                    <Col key={el.id}>
                    <Singlealbum  album={el}/>
                    
                    </Col>
                )
            })}
        </Row>
    )
}

export default Searchsection