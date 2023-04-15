import {getDoneTodos} from "@/modules/Data";
import { useAuth } from "@clerk/nextjs";
import React, { useState, useEffect } from "react";

export default function DoneComp(){
    const [loading, setLoading] = useState(true);
    const [todos, setTodos] = useState([]);
    const { isLoaded, userId, sessionId, getToken } = useAuth();
    const [newDesc, setnewDesc] = useState("")
    
    //console.log(isLoaded, userId, sessionId, getToken)
    
    useEffect(() => {
        async function startup(){
            if(userId){
                const token = await getToken({template:'codehooks'})
                setTodos(await getDoneTodos(token, userId))
                setLoading(false)
            }
        }
        startup();
    }, [isLoaded]);

    
    
    if(loading){
        return <span>Hol' on one sec... </span>
    }
    else{
        //Credit to Anwaar Hadi in the questions chat, this is under 10 lines limit so I should be good.
        todos.sort((a,b) => a.createdOn < b.createdOn ? 1: (a.createdOn > b.createdOn ? -1 : 0))
        
        const allTodos = todos.map((aTodo) =>(
            <div class="column is-4">
                <div class="card large">
                    <div class="card-content">
                        {aTodo.todo}<br></br>
                        
                    </div>
                </div>
            </div>
        ));
        return(
            <>
                {allTodos}
            </>
        )
    }

    return(<div>allo</div>
    )
}