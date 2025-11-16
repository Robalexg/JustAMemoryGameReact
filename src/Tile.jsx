import './css/Tile.css'


const Tile = ({data,handleClick}) => {


    return (
        <div  className='tile'>
            <div style={{background:data.color}} className='inside'>
                <img onClick={() => {handleClick(data.id)}}  src={data.src} alt="" />
            </div>
        </div>
    )
}


export {Tile}