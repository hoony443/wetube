import express from "express"; 
import routes from "../routes";

const videoRouter = express.Router();

videoRouter.get(routes.videos, (req, res) => res.send("hello. this is video!"));
videoRouter.get(routes.upload, (req, res) => res.send(`hello. this is upload!`));
videoRouter.get(routes.viedoDetail, (req, res) => res.send(`hello. this is viedoDetail!`));
videoRouter.get(routes.editVideo, (req, res) => res.send(`hello. this is editVideo!`));
videoRouter.get(routes.deleteVideo, (req, res) => res.send(`hello. this is deleteVideo!`));


export default videoRouter;