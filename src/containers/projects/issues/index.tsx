import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import { Avatar, Divider, Table } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";

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

const IssuesContainer = () => {
  const router = useRouter();
  const { id } = router.query;
  const [issues, setIssues] = useState([]);
  useEffect(() => {
    if (id) {
      axios.get(`/api/issues/${id}`).then((res) => {
        setIssues(res.data);
      });
    }
  }, [id]);
  return (
    <div>
      <div className=" flex justify-between items-center">
        <div>
          <h2 className="text-[#000] text-xl font-bold">
            Issues <span className="text-[#e24327]">{issues.length}</span>
          </h2>
        </div>
        <div>
          <Link
            href={`/projects/${id}/issues/new`}
            className="text-[#2765c4] border-[#2765c4] border-[2px] rounded-lg p-4 font-bold"
          >
            New Issues
          </Link>
        </div>
      </div>
      <Divider />
      <Table columns={columns} dataSource={issues} />
    </div>
  );
};

export default IssuesContainer;
