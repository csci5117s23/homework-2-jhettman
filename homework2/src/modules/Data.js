const backend = process.env.API_ENDPOINT;
const key = process.env.API_KEY
export async function getUndoneTodos(authToken, userId){
    
    const res = await fetch(backend+"/todo?done=false&userId="+userId,{
        "method":"GET",
        'headers':{'x-apikey': key }
    })
    
    return await res.json();
}

export async function getDoneTodos(authToken, userId) {
    const res = await fetch(backend+"/todo/?done=true&userId="+userId,{
        "method":"GET",
        'headers':{'x-apikey': key,
                   'Authorization': 'Bearer ' + authToken}
        
    })
    return await res.json();
}

export async function getAllTodos(authToken, userId) {
    const res = await fetch(backend+"/todo/?userId="+userId,{
        "method":"GET",
        'headers':{'x-apikey': key,
                   'Authorization': 'Bearer ' + authToken}
        
    })
    return await res.json();
}

export async function getSingleTodo(authToken,_Id) {
    const res = await fetch(backend+"/todo/"+_Id,{
        "method":"GET",
        'headers':{'x-apikey': key,
                   'Authorization': 'Bearer ' + authToken}
    })
    return await res.json();
}


export async function postTodo(authToken, Todo, userId) {
    
    const res = await fetch(backend+"/todo",{
        "method":"POST",
        'headers': {'Content-Type' : 'application/json', 
                   'x-apikey': key,
                   'Authorization': 'Bearer ' + authToken},
        'body': JSON.stringify({todo:Todo,done:false,userId:userId })
    
    })
    console.log(res)
    
    return await res.json();
}

export async function doneTodo(authToken, _Id) {
    const res = await fetch(backend+"/todo/"+_Id,{
        //set to done
        "method":"PATCH",
        'headers':{'Content-Type': 'application/json',
                   'x-apikey': key,
                   'Authorization': 'Bearer ' + authToken},
        'body' : JSON.stringify({done : true})
    })
    return await res.json();
}

export async function editTodo(authToken, _Id, edit) {
    const res = await fetch(backend+"/todo/"+_Id,{
        //set to done
        "method":"PATCH",
        'headers':{'Content-Type': 'application/json',
                   'x-apikey': key,
                   'Authorization': 'Bearer ' + authToken},
        'body' : JSON.stringify({todo:edit})
    })
    return await res.json();
}

