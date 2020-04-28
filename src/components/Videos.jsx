import React from 'react';
import './videos.css';
import ReactPlayer from 'react-player';

const Videos = () => {
    let videos = [
        {title: 'Belen', artist: 'Malavista', description: 'Para todos ustedes... Belen', url: 'https://www.youtube.com/watch?v=-2Q3CydTYLM', id: 1},
        {title: 'Inolvidable', artist: 'Fran Mora', description: 'Un poco de Santana no cae mal',url: 'https://www.youtube.com/watch?v=uXevMQ0ETAg', id: 2},
        {title: 'El color de tus ojos', artist: 'Chucho Rivas', description: 'en vivo desde olas altas', url: 'https://www.youtube.com/watch?v=-YUwh6pAhuw', id: 3}
    ];
    
    let videos2 = videos;

    const videosDom = videos2.map(video => 
        <div className="container" key={video.id}>
            <h3>{video.artist}</h3>
            <div className="video">
              <ReactPlayer url={video.url} controls={true} className="videoPlayer"/>
            </div>
            <h5>{video.title}</h5>
            <p className="artistP">{video.description}</p>
            <div className="divider"></div>
        </div>
    );

    const videoList = (
      <div>
        {videosDom}
      </div>
    )

    return(
        <div className="container cont-artist">
        {videoList}
        </div>
    )
}

export default Videos;