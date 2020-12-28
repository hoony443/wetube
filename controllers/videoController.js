
import routes from "../routes";
import Video from "../models/Video";
// async는 'JavaScript야 이 function의 어떤 부분은 꼭 기다려야 해' 라고 이야기하는 것과 같음.
export const home = async(req, res) => {
    try {
        const videos = await Video.find({});
        res.render("Home", { pageTitle : "Home", videos });
    } catch(error) {
        console.log(error);
        res.render("Home", { pageTitle : "Home", videos: [] });
    }
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

export const postUpload = async(req, res) => {
        const { 
            body: { title, description },
            file: { path }
         } = req;
         //console.log(path); 
         const newVideo = await Video.create({
            fileUrl: path,
            title,
            description
         }); 
         console.log(newVideo); 
         res.redirect(routes.videoDetail(newVideo.id));
};   

export const videoDetail = (req, res) => 
    res.render("videoDetail", { pageTitle : "Video Detail" });

export const editVideo = (req, res) => 
    res.render("editVideo", { pageTitle : "Edit Video" });

export const deleteVideo = (req, res) => 
    res.render("deleteVideo", { pageTitle : "Delete Video" });