import express from "express"; 
import routes from "../routes";

const userRouter = express.Router();  

userRouter.get("/users", (req, res) => (res.send(`This is user user HOME!`)));

userRouter.get(routes.userDetail, (req, res) => (res.send(`This is user userDetail!`)));
userRouter.get(routes.editProfile, (req, res) => (res.send(`This is user editProfile!`))); 
userRouter.get(routes.changePassword, (req, res) => (res.send(`This is user changePassword!`)));

export default userRouter;