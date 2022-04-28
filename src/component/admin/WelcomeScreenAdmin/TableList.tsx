import { useEffect, useState } from "react"


export const LevelPresentationTable = () => {
    const  [isLoading,setLoading]=useState(false)

    return(
        <>
       <table className="table table-bordered text-center mt-5">
        <thead style={{backgroundColor:"rgba(215, 215, 250, 1)"}}>
            <tr>
            <th scope="col">Level Presentation</th>
            <th scope="col">Participants</th>
            <th scope="col">Percentage (%)</th>
            </tr>
        </thead>
        {isLoading?"Loading ... " : 
        <tbody style={{backgroundColor:"rgba(255, 255, 255, 1)"}}>
            <tr>
                <td>Low</td>
                <td>20</td>
                <td>2</td>
            </tr>
            <tr>
                <td>Moderate</td>
                <td>3</td>
                <td>2</td>
            </tr>
            <tr>
                <td>High</td>
                <td>2</td>
                <td>6</td>
            </tr>
        </tbody>}
        </table>
        </>
    )
}


