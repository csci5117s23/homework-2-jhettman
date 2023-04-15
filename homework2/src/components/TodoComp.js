import {getUndoneTodos,deleteTodo,postTodo,doneTodo} from "@/modules/Data";
import { useAuth } from "@clerk/nextjs";
import React, { useState, useEffect } from "react";
import Link from "next/link";
export default function TodoComp(){
    const [loading, setLoading] = useState(true);
    const [todos, setTodos] = useState([]);
    const { isLoaded, userId, sessionId, getToken } = useAuth();
    const [newDesc, setnewDesc] = useState("")
    
    
    useEffect(() => {
        async function startup(){
            if(userId){
                const token = await getToken({template:'codehooks'})
                setTodos(await getUndoneTodos(token, userId))
                setLoading(false)
            }
        }
        startup();
    }, [isLoaded]);

    async function make(){
        const token = await getToken({template:'codehooks'})
        const newTodo = await postTodo(token, newDesc, userId)
        setnewDesc("")
        setTodos(await getUndoneTodos(token,userId))
    }

    async function done(_Id) {
        
        const token = await getToken({template:'codehooks'})
        await doneTodo(token, _Id, userId)
        setTodos(await getUndoneTodos(token,userId));
    }
    console.log(todos)
    if(userId){
    if(loading){
        return <span>Hol' on one sec... </span>
    }
    else{
        //Credit to Anwaar Hadi in the questions chat, this is under 10 lines limit so I should be good.
        todos.sort((a,b) => a.createdOn < b.createdOn ? 1: (a.createdOn > b.createdOn ? -1 : 0))
        const allTodos = todos.map((aTodo) =>(
            <div class="column is-4">
                <div class="card large">
                    <div class="card-content" >
                        <Link href={"/todos/"+aTodo._id}>{aTodo.todo}</Link><br></br>
                        <button class="button is-dark" onClick={() => {done(aTodo._id)}}>Mark done?</button>
                    </div>
                </div>
            </div>
        ));
        return(
            <>
                <div class="column is-4">
                    <div class="card large">
                        <div class="card-content">
                            <div class="control">
                                <textarea class="textarea" placeholder="A new To-do?" onChange={(e) => setnewDesc(e.target.value)}></textarea>
                                <button class="button is-dark" onClick={() => {make()}}>Add To-do!</button>
                            </div>
                        </div>
                    </div>
                </div>
                {allTodos}
            </>
        )
    }

}
}