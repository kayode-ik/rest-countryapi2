
import LoopIcon from '@mui/icons-material/Loop';


const Loading = ({text}) => {
    return (
        <div className="loader">
           <span className="loading">
              {/* <LoopIcon  fontSize='small'/> */}
           </span>
           <p>
               Please Wait while loading {text}, this should take a second. 
           </p>
        </div>
    )
}

export default Loading