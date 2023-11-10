import { useEffect, useState} from "react"
import Singlealbum from "./Singlealbum"
import { Col } from "react-bootstrap"
import { getDeatilsAction, selectedAction } from "../redux/actions"
import { useDispatch, useSelector } from "react-redux"





const Albums = (props)=>{


    const [albums,setAlbums] = useState([])
    const selected = useSelector((state)=> state.selected.selected)
    const dispatch = useDispatch()

    const getAlbums = ()=>{
        fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${props.query}`)
        .then(res=>{
            if(res.ok){
                return res.json()
            } else {
                throw new Error ('Errore nel caricamento degli album')
            }
        })
        .then(data=>{
            console.log(data)
            setAlbums(data.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }


    useEffect(()=>{
        getAlbums()
       
    },[])

    const handleClick = (singleAlbum)=>{
        dispatch(getDeatilsAction(singleAlbum))
        dispatch(selectedAction(singleAlbum))
    }

    return (
       <>
       {albums.map((el,index)=>{
        if(index<4){
            return (
                <Col key={el.id}>
                <Singlealbum album={el} click={()=> handleClick(el) } />
                
                </Col>
            )
        }
       })}
       </>
    )
}

export default Albums