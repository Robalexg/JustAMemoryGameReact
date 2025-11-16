import './css/Gameboard.css'

import { useState } from 'react'
import { Tile } from './Tile'
import cat1 from './assets/images/cat1.png'
import cat2 from './assets/images/cat2.png'
import cat3 from './assets/images/cat3.png'
import cat4 from './assets/images/cat4.png'
import cat5 from './assets/images/cat5.png'
import cat6 from './assets/images/cat6.png'



const Gameboard = () => {
    const [colors,setColors] = useState([
        "#75A1C2",
        '#E1C063',
        '#C3DD73',
        '#514A4F',
        '#DB7B73',
        '#FEFBEA'
    ])
    const [score,setScore] = useState(0)
    const [tiles,setTiles] = useState([
        {
            id: crypto.randomUUID(),
            color: colors[0],
            src: cat1
        },
        {
            id: crypto.randomUUID(),
            color: colors[1],
            src: cat2

        },
        {
            id: crypto.randomUUID(),
            color: colors[2],
            src: cat3

        },
        {
            id: crypto.randomUUID(),
            color: colors[3],
            src: cat4

        },
        {
            id: crypto.randomUUID(),
            color: colors[4],
            src: cat5

        },
        {
            id: crypto.randomUUID(),
            color: colors[5],
            src: cat6

        },
        
    ])
    const [clicked,setClicked] = useState([])
    const [cycle, setCycle] = useState(0)


    const handleClick = (id) => {
        randomizeTiles()

        if(clicked.includes(id)){
            setScore(0)
            setClicked(0)
            setClicked([])
        }else{
            if((clicked.length + 1) === 6){
                setCycle(cycle + 1)
                setClicked([])
            }else{
                setClicked([...clicked,id])
            }

            setScore(score + 1)
        }
    }


    const randomizeTiles = () => {
        const copy = [...tiles]
            .map((tile) => ({...tile,sort:Math.random()}))
            .sort((a,b) => a.sort - b.sort)
            .map((tile,i) => ({...tile,color:colors[i]}))

        randomizeColors()
        setTiles(copy)  
    }



    const randomizeColors = () => {
        const copy = [...colors]
            .map((color) => ({...color,sort:Math.random()}))
            .sort((a,b) => a.sort - b.sort)
            .map((color) => color)

        setColors(copy)  
    }

    return (
        <div className="gameboard">
            <h1>{`Cycle: ${cycle} | Score: ${score}`}</h1>
            {
                tiles.map((tile) => 
                    <Tile handleClick={handleClick} key={tile.id} data={tile}/>
                )
            }
        </div>
    )
}

export {Gameboard}