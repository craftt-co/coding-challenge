import { Profile, ProfileRepo } from "../repos/profile.repo";

export class ProfileService {
  private profileRepo: ProfileRepo;

  constructor(profileRepo: ProfileRepo) {
    this.profileRepo = profileRepo;
  }

  async getAllProfiles() {
    return this.profileRepo.getAllProfiles();
  }

  async getProfileById(id: string) {
    return this.profileRepo.getProfileById(id);
  }

  async saveProfileById(id: string, profile: Profile) {
    return this.profileRepo.saveProfileById(id, profile);
  }
}
