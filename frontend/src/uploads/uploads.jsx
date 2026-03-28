import { useState } from "react"
import uploads from "../services/api"
import API from "../services/api";

export default uploads=async()=>{
    const [file , setfile]  = useState(null);
    const handleupload=()=>{
        try {
            const formData = new formData();
        formData.append("file" , file);
        await API.post("/documents/upload" , formData); 
        alert("file submiited")
        } catch (error) {
            console.log("error" , error);
            alert("submission failed")            
        }
        return(
            <div>
                <h2>uploads</h2>
                <input type="file" name="" id="" onChange={(e)=>e.target.file[0]}/>
                <button type="submit" onClick={handleupload}>submit</button>
            </div>
        )
    }

}