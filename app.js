const express = require("express");
const router = require("express").Router();

// Blog Controller Placeholder
const blogController = {
    readBlog: (req, res) => res.send("Blog read successfully"),
    updateBlog: (req, res) => res.send("Blog update successfully"),
    deleteBlog: (req, res) => res.send("Blog delete successfully")
};

// Read Route
router.get("/read-blog", blogController.readBlog);

// Update Route
router.put("/update-blog", blogController.updateBlog);

// Delete Route
router.delete("/delete-blog", blogController.deleteBlog);

const app = express();

app.use(router);

app.listen(8080, function(){
    console.log("App is running at port 8080");
});
