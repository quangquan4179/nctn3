import { FormRow } from "@/common/form/FormRow";
import { dateTime } from "@/common/helpers/dateTime";
import { StarOutlined } from "@ant-design/icons";
import { Divider } from "antd";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const ProjectDetail = () => {
  const [project, setProject] = useState<any>();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      axios.get(`/api/project/${id}`).then((res) => setProject(res.data));
    }
  }, [router, id]);
  return (
    <div className="text-[#000]">
      <div>
        <div className="flex justify-between items-center">
          <div>
            <div className="text-[26px] font-bold"> Project Detail</div>
          </div>
          <div>
            <Link
              href={`/projects/${id}/issues`}
              className="text-[#2765c4] border-[#2765c4] border-[2px] rounded-lg p-4 font-bold"
            >
              Issues
            </Link>
          </div>
        </div>
        <Divider />
        <FormRow label="Project Name">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-bold">{project?.name}</h1>
            <div className="flex items-center">
              <span>Star: {project?.star_count}</span>
              <StarOutlined className="text-[#f0bc11]" />
            </div>
          </div>
        </FormRow>
        <FormRow label="Description">
          <div>{project?.description}</div>
        </FormRow>
        <FormRow label="Namespace">
          <div>{project?.name_with_namespace}</div>
        </FormRow>
        <FormRow label="Default Branch">
          <div>{project?.default_branch}</div>
        </FormRow>
        <FormRow label="Ssh url to repository ">
          <div>{project?.ssh_url_to_repo}</div>
        </FormRow>
        <FormRow label="Https url to repository ">
          <div>{project?.http_url_to_repo}</div>
        </FormRow>
        <FormRow label="Last activity ">
          <div>{dateTime(project?.last_activity_at)}</div>
        </FormRow>
        <FormRow label="Created At">
          <div>{dateTime(project?.created_at)}</div>
        </FormRow>
        <FormRow></FormRow>
      </div>
    </div>
  );
};

export default ProjectDetail;
