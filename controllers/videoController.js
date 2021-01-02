
import routes from "../routes";
import Video from "../models/Video";
// async는 'JavaScript야 이 function의 어떤 부분은 꼭 기다려야 해' 라고 이야기하는 것과 같음.
export const home = async (req, res) => {
    try {
        const videos = await Video.find({}).sort({ _id: -1 });
        res.render("Home", { pageTitle: "Home", videos });
    } catch (error) {
        console.log(error);
        res.render("Home", { pageTitle: "Home", videos: [] });
    }
};

export const search = async (req, res) => {
    // const searchingBy = req.query.term;
    const {
        query: { term: searchingBy } // searchingBy 이름을 붙여 사용할 수도 있음
    } = req;
    let videos = [];
    //console.log(req.query.term);
    try {
        videos = await Video.find({ title: { $regex: searchingBy, $options: "i" } });
    } catch (error) {
        console.log(error);
    }
    res.render("search", { pageTitle: "Search", searchingBy, videos }); // term 또는 searchingBy
};

//export const videos = (req, res) => 
//res.render("videos", { pageTitle : "Videos" });

export const getUpload = (req, res) =>
    res.render("upload", { pageTitle: "Upload" });

export const postUpload = async (req, res) => {
    const {
        body: { title, description },
        file: { path }
    } = req;
    console.log(path);
    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description
    });
    console.log(newVideo);
    res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = async (req, res) => {
    const {
        params: { id }
    } = req;
    try {
        const video = await Video.findById(id);
        console.log(video);
        res.render("videoDetail", { pageTitle: video.title, video });
    } catch (error) {
        console.log(error);
        res.redirect(routes.home);
    }
};

export const getEditVideo = async (req, res) => {
    const {
        params: { id }
    } = req;
    try {
        const video = await Video.findById(id);
        res.render("editVideo", { pageTitle: `Edit ${video.title}`, video });
    } catch (error) {
        console.log(error);
        res.redirect(routes.home);
    }
};


export const postEditVideo = async (req, res) => {
    const {
        params: { id },
        body: { title, description }
    } = req;
    try {
        await Video.findOneAndUpdate({ _id: id }, { title, description });  // title: title, description: description 과 같음!!!
        res.redirect(routes.videoDetail(id));
    } catch (error) {
        console.log(error);
        res.redirect(routes.home);
    }
};


export const deleteVideo = async (req, res) => {
    const {
        params: { id }
    } = req;
    try {
        //const video = await Video.findById(id);
        console.log(id);
        await Video.findOneAndRemove({ _id: id });
    } catch (error) {
        console.log(error);
    }
    res.redirect(routes.home);
}; 