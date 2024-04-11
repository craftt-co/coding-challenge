import { useEffect, useState } from "react";
import { getProfileById, updateProfileById } from "../api/apiClient";
import { Profile } from "../types";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './ProfileEdit.css';
import _ from "lodash";

const ProfileEdit = () => {
  const navigate = useNavigate();
  const { profileId } = useParams();
  const [profile, setProfile] = useState<Profile>();

  useEffect(() => {
    if (profileId) getProfileById(profileId).then(setProfile)
  }, [profileId])
  const save = () => {
    if (profileId && profile) updateProfileById(profileId, profile).then(() => navigate("/"))
  }
  return (
    <div className="profie-edit-form">
      <div className="edit-title">Edit profile</div>
      <div>ID: {profile?.id}</div>
      <div className="input-item">
        Name:
        <input type="text" value={profile?.name} onChange={e => {
          if (profile) { 
            _.set(profile, "name", e.target.value);
            setProfile({...profile})
          }
        }}/>
      </div>
      <div className="edit-cta-wrapper">
        <button onClick={save}>Save</button>
        <button onClick={() => navigate(`/`)}>Cancel</button>
      </div>
    </div>
  )
}

export default ProfileEdit;