
import routes from "../routes";

export const home = (req, res) => {
    res.render("Home", { pageTitle : "Home", videos });
};

export const search = (req, res) => {
    // const searchingBy = req.query.term;
    const {
         query: { term: searchingBy } // searchingBy 이름을 붙여 사용할 수도 있음
        } = req;
    //console.log(req.query.term);
    res.render("search", { pageTitle : "Search", searchingBy, videos }); // term 또는 searchingBy
};

//export const videos = (req, res) => 
    //res.render("videos", { pageTitle : "Videos" });

export const getUpload = (req, res) => 
    res.render("upload", { pageTitle : "Upload" });

export const postUpload = (req, res) => {
    const { body: { file, title, description } } = req;
    // To Do: Upload and Save Video
    res.redirect(routes.videoDetail(3844989))
};   

export const videoDetail = (req, res) => 
    res.render("videoDetail", { pageTitle : "Video Detail" });

export const editVideo = (req, res) => 
    res.render("editVideo", { pageTitle : "Edit Video" });

export const deleteVideo = (req, res) => 
    res.render("deleteVideo", { pageTitle : "Delete Video" });