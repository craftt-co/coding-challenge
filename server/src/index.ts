import express from "express";
import cors from "cors";
import { ProfileRepo } from "./repos/profile.repo";
import { ProfileRouter } from "./routes/profile";
import { ProfileService } from "./services/profile.service";

const app = express();
app.use(express.json({limit: "10mb"}));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(cors({ origin: "http://localhost:3000" }));
const profileRepo = new ProfileRepo();
const profileService = new ProfileService(profileRepo);
const profileRouter = new ProfileRouter(profileService);

app.use("/profile", profileRouter.getRouter());

app.listen(3001, "localhost", () => {
  // eslint-disable-next-line no-console
  console.log("Express server started successfully");
});
