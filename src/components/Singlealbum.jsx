

const Singlealbum = (props)=>{
 return (
    <div className="mt-3" onClick={props.click}>
        <div className="text-center">
            <img src={props.album.album.cover_big} alt="album-img" width={300} />
        </div>
        <p className="text-white text-center">
        {props.album.title}
        </p>
    </div>
 )
}

export default Singlealbum