const mongoose = require("mongoose");
const Path = require("./models/Path");
const { shortestPath } = require("./service/getShortestPath");

// const getAllPaths = async(req,res,next) =>{
//     let blogs;
//     try{
//         blogs = await Path.find();
//         console.log(blogs);
//     }catch(e){
//         console.log(e);
//     }
//     if(!blogs){
//         return res.status(404).json({message : " No blogs found"});
//     }
    
//     return res.status(200).json({blogs});
// }
const getAllPaths = (req, res) => {
    Path.find()
        .then((todo) => res.status(200).json(todo))
        .catch((err) =>
            res
                .status(404)
                .json({ message: "Todo not found", error: err.message })
        );
}

const getShortestPath = (req, res) => {
    Path.find()
        .then((todo) => {
            let path = shortestPath(todo,"A","F");
            res.status(200).json(path)
        })
        .catch((err) =>
            res
                .status(404)
                .json({ message: "Todo not found", error: err.message })
        );
}


const addPaths = async(req,res,next) =>{
    Path.create(req.body)
        .then((data) => res.json({ message: "Todo added successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to add todo", error: err.message })
        );
}

const updateBlog = async(req,res,next) => {
    const blogId = req.params.id;
    const { title , desc  } = req.body;
   
    let blog;

    try {
         blog = await Blog.findByIdAndUpdate(blogId , {
            title,
            desc
        });
    } catch (e) {
        return console.log(e);
    }

    if(!blog){
        return res.status(500).json({message : "Unable to update"})
    }
    
    return res.status(200).json({blog});
}

const deleteBlog = async (req, res, next) => {

    const id = req.params.id;
    
    try {
        const blog = await Blog.findByIdAndDelete(id).populate('user');

        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        // Remove the blog from the user's blogs array
        const user = blog.user;
        user.blogs.pull(blog);
        await user.save();

        return res.status(200).json({ message: "Successfully deleted" });

    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: "Unable to delete" });

    }
}
module.exports = { getAllPaths : getAllPaths , getShortestPath : getShortestPath} ;