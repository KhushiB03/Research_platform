import pool from "../config/db";

export const createPaper = async(
    title: string,
    abstract:string,
    file_url:string,
    author_id:number

)=>{
    await pool.execute(
        "INSERT INTO research_papers (title , abstract , file_url , author_id) VALUES(?,?,?,?)",
        [title,abstract,file_url,author_id]

    );
    return{message: "paper submitted successsfully"};
};

export const getMyPapers = async(author_id :number)=>{
    const [rows] = await pool.execute(
        "SELECT * FROM research_papers WHERE author_id =?",[author_id]
    );
    return rows;
};
export const getAllPapers = async(page:number,
    limit:number,
    status?: string 
)=>{
    const offset = (page-1)*limit;
    let query = "SELECT * FROM research_papers";
    let values:any[] = [];
    if(status){
        query+="WHERE status=?";
        values.push(limit , offset);

    }
    query+="LIMIT ? OFFSET ?";
    values.push(limit,offset);
    const [rows] = await pool.execute(query,values);
    return rows;
};
export const updatePaper = async(
    paperId:number,
    userId:number,
    title:number,
    abstract:string,
    file_url:string
)=>{
    const [rows]:any = await pool.execute(
        "SELECT * FROM research_papers WHERE id =?",[paperId]
    );
    if(rows.length ===0){
        throw new Error("Paper not found");
    }
    if(rows[0].author_id !== userId){
        throw new Error("you r not allowed to updat this paper");
    }
    await pool.execute(
        "UPDATE research_papers SET title=?, abstract=?, file_url=? WHERE id=?",
        [title,abstract,file_url,paperId]
    );
    return {message : "Paper updated successfully"};
};
export const updatePaperStatus = async (
  paperId: number,
  status: string
) => {
  await pool.execute(
    "UPDATE research_papers SET status=? WHERE id=?",
    [status, paperId]
  );

  return { message: "Status updated successfully" };
};