import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import { Avatar, Divider } from "antd";
import Link from "next/link";

const GroupContainer = () => {
  const { data: session } = useSession();
  const [group, setGroup] = useState([]);
  console.log("🚀 ~ file: index.tsx:10 ~ GroupContainer ~ group:", group);
  useEffect(() => {
    axios.get("/api/group").then((res) => {
      setGroup(res.data);
    });
  }, [session]);
  return (
    <div>
      {group.map((pr: any) => (
        <Link
          key={pr.id}
          href={`/groups/${pr.id}`}
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

export default GroupContainer;
