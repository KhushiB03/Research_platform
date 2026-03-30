import { useState } from "react";

export default function Ask(){
    const [query , setQuery] = useState("");
    const [answer , setAnswer] = useState("");
    const [loading  , setLoading] = useState(false);
    const askQuestion= async()=>{
        setLoading(true);
        const res = await API.post("/ask" , {query});
        setAnswer(res.data.answer);
        setLoading(false);
    };
    return(
        <div>
            <h2>ask question</h2>
            <input type="text"
            value={query}
            onChange={(e)=>setQuery(e.target.value)} />
            <button
            onClick={askQuestion}></button>
            //UNDERSTAND CODE FURTHER
            
        </div>
    )
}