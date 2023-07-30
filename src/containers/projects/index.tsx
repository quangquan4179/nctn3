import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import { Avatar, Divider } from "antd";
import Link from "next/link";

const ProjectContainer = () => {
  const { data: session } = useSession();

  const [project, setProject] = useState([]);
  useEffect(() => {
    axios.get("/api/project").then((res) => {
      setProject(res.data);
    });
  }, [session]);
  return (
    <div>
      <div className=" flex justify-between items-center">
        <div className="mb-10">
          <h2 className="text-[#000] text-xl font-bold">Projects</h2>
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

export default ProjectContainer;
