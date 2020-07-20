import React , {useState} from 'react'
import ReactPlayer from 'react-player'
import myVideo1 from './everstone.mp4'
import {Grid} from '@material-ui/core'
import Image1 from './1.jpg'
import Image2 from './2.jfif'
import Image3 from './3.jfif'
import myVideo2 from './vid2.mp4'
import myVideo3 from './vid3.mp4'
import ReactTooltip from "react-tooltip";
import './Player.css'



function Video() {

    const [url,setUrl] = useState(myVideo1)

    return (
        <div>
            <Grid container>
                <Grid item lg={9} md={9} xs={9}>
                <div className='player-wrapper' data-tip="Video Player">
                    <ReactPlayer
                    className='react-player'
                    url={url}
                    controls={true} 
                    config={{ file: { 
                    attributes: {
                    controlsList: 'nodownload'
                    }
                }}}
                    width='100%'
                    height='100%'
                    />
                    <ReactTooltip />
                </div>
                </Grid>
                <Grid item lg={3} md={3} xs={3}>
                   <img src={Image1} alt="image 1" height="100px" width="95%"  onClick={()=> {setUrl(myVideo1)}} />
                   <img src={Image2} alt="image 1" height="100px" width="95%" onClick={()=> {setUrl(myVideo2)}}/>
                   <img src={Image3} alt="image 1" height="100px" width="95%" onClick={()=> {setUrl(myVideo3)}}/>   
                </Grid>
            </Grid> 
        </div>
    )
}

export default Video
