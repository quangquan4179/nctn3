import { Avatar, Divider, Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
type Props = {
  user:
    | {
        name?: string | null;
      }
    | undefined;
};
const columns = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "State",
    dataIndex: "state",
    key: "state",
  },
  {
    title: "Due Date",
    dataIndex: "due_date",
    key: "due_date",
  },
  {
    title: "Assignees",
    dataIndex: "assignees",
    key: "assignees",
    render: (data: any[]) => {
      console.log(data);
      return (
        <div>
          <Avatar.Group maxCount={2} maxPopoverTrigger="click">
            {data.map((user) => (
              <Avatar key={user.id} src={user.avatar_url}>
                {user.username}
              </Avatar>
            ))}
          </Avatar.Group>
        </div>
      );
    },
  },
];
const MainContainer = ({ user }: Props) => {
  const [issues, setIssues] = useState([]);
  useEffect(() => {
    axios.get(`/api/issues/now`).then((res) => {
      setIssues(res.data);
    });
  }, []);

  return (
    <div>
      <div>
        <h1 className="text-[#000]">Hello, {user?.name}</h1>
      </div>
      <div className="text-[#000]">
        Today you have {issues.length} must be resolve
      </div>
      <Divider />
      <Table columns={columns} dataSource={issues} />
    </div>
  );
};

export default MainContainer;
