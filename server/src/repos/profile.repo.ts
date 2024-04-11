export interface Profile {
  id: string;
  name: string;
}

export class ProfileRepo {
  private profiles = new Map();
  constructor() {
    // add some default data
    this.profiles.set("001", {
      id: "001",
      name: "First profile",
    });
    this.profiles.set("002", {
      id: "002",
      name: "Second profile",
    });
    this.profiles.set("003", {
      id: "004",
      name: "Third profile",
    });
  }

  async getProfileById(id: string): Promise<Profile | undefined> {
    return this.profiles.get(id);
  }

  async getAllProfiles(): Promise<Profile[] | undefined> {
    return [...this.profiles].map(([key, value]) => value);
  }

  async saveProfileById(
    id: string,
    profile: Profile
  ): Promise<Profile | undefined> {
    this.profiles.set(id, profile);
    return this.profiles.get(id);
  }
}
