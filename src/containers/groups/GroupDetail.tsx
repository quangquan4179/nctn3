import { Avatar, Divider } from "antd";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const GroupDetail = () => {
  const [project, setProject] = useState<any[]>([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      axios.get(`/api/group/${id}`).then((res) => setProject(res.data));
    }
  }, [id, router]);
  return (
    <div>
      <div className=" flex justify-between items-center">
        <div className="mb-10">
          <h2 className="text-[#000] text-xl font-bold">Projects</h2>
        </div>
        <div>
          <Link
            href={`/groups/${id}/new`}
            className="text-[#2765c4] border-[#2765c4] border-[2px] rounded-lg p-4 font-bold"
          >
            New project
          </Link>
        </div>
      </div>
      {project.map((pr: any) => (
        <Link
          key={pr.id}
          href={`/projects/${pr.id}`}
          className="text-[#000] min-h-[100px] block "
        >
          <div>
            <Avatar>{pr.name}</Avatar>
            <h3 className="font-bold">{pr.name}</h3>
          </div>
          <Divider />
        </Link>
      ))}
    </div>
  );
};

export default GroupDetail;
