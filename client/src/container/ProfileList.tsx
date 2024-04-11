import { useEffect, useState } from "react";
import { getAllProfiles } from "../api/apiClient";
import { Profile } from "../types";
import './ProfileList.css';
import { useNavigate } from "react-router-dom";
import { Table } from "antd";

const ProfileView = () => {
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState<Profile[]>();

  useEffect(() => {
    getAllProfiles().then(setProfiles)
  }, [])

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, {id}: any) => (
        <div className="table-actions">
          <button onClick={() => navigate(`/${id}`)}>Edit</button>
          <button>Delete</button>
        </div>
      ),
    },
  ]

  return (
    <div>
      <Table columns={columns} dataSource={profiles} />
    </div>
  )
}

export default ProfileView;