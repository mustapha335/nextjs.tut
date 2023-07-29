import { NextResponse } from "next/server"
import connect from "@/utils/db"
import Post from "@/models/Post";
export  const GET = async (requst,{params}) => {
    //Fetch
    const { id } = params;
try {
    await connect();

    const post = await Post.findById(id);

    return new NextResponse(JSON.stringify(post), {status : 200})
} catch (error) {
     return new NextResponse ("DataBase Not found", {status: 500})
}
   

} 
export  const DELETE = async (requst,{params}) => {
    //Fetch
    const { id } = params;
try {
    await connect();

    const post = await Post.findByIdAndDelete(id);

    return new NextResponse("Post Deleted", {status : 200})
} catch (error) {
     return new NextResponse ("DataBase Not found", {status: 500})
}
   

} 