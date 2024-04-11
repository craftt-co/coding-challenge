import { Router } from "express";
import { ProfileService } from "../services/profile.service";

export class ProfileRouter {
  private profileService: ProfileService;

  constructor(profileService: ProfileService) {
    this.profileService = profileService;
  }

  getRouter() {
    const router = Router();
    router.get("", async (req, res, next) => {
      const profiles = await this.profileService.getAllProfiles();
      if (profiles) return res.status(200).json(profiles);
      return res.status(404).send();
    });
    router.get("/:profileId", async (req, res, next) => {
      const profile = await this.profileService.getProfileById(
        req.params.profileId
      );
      if (profile) return res.status(200).json(profile);
      return res.status(404).send();
    });
    router.post("/:profileId", async (req, res, next) => {
      const profile = await this.profileService.saveProfileById(
        req.params.profileId,
        req.body
      );
      if (profile) return res.status(200).json(profile);
      return res.status(400).send();
    });
    return router;
  }
}
