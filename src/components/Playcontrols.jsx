import React from 'react';
import shuffle from '../startAssets/playerbuttons/shuffle.png'
import prev from '../startAssets/playerbuttons/prev.png'
import play from '../startAssets/playerbuttons/play.png'
import next from '../startAssets/playerbuttons/next.png'
import repeat from '../startAssets/playerbuttons/repeat.png'
import { useSelector } from 'react-redux';


const PlayerControls = () => {

  const details = useSelector((state)=>state.details.detail)
  

  return (
    <div className="container-fluid fixed-bottom bg-container pt-1">
      <div className="row h-100">
        <div className="col-lg-10 offset-lg-2">
          <div className="row d-flex h-100  align-items-center">
            <div className='col-4'>
            {details && details.album && details.album.cover_big ? (
                <>
                  <img src={details.album.cover_big} alt="logo-album" width={50} />
                  <p className="text-white">{details.artist?.name}</p>
                </>
              ) : (
                null
              )}
                 
              
            </div>
            <div className="col-6 col-md-4 playerControls">
              <div className="d-flex">
                <a href="#">
                  <img src={shuffle} alt="shuffle" />
                </a>
                <a href="#">
                  <img src={prev} alt="prev" />
                </a>
                <a href="#">
                  <img src={play} alt="play" />
                </a>
                <a href="#">
                  <img src={next} alt="next" />
                </a>
                <a href="#">
                  <img src={repeat} alt="repeat" />
                </a>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerControls;
