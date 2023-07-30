import { FormRow } from "@/common/form/FormRow";
import { Avatar, Button, Input, Select } from "antd";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
const TextArea = Input.TextArea;

function NewIssues() {
  const { control, handleSubmit } = useForm();
  const [users, setUsers] = useState([]);
  const router = useRouter();
  const { id } = router.query;
  const onSubmit = async (data: any) => {
    try {
      const res = await axios.post("/api/issues/new", {
        ...data,
        projectId: id,
      });
    } catch (error) {}
    router.push(`/projects/${id}/issues`);
  };
  useEffect(() => {
    if (id) {
      axios.get(`/api/member/${id}`).then((res) => {
        setUsers(res.data);
      });
    }
  }, [router, id]);

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormRow label="Title" labelClassName="text-[#000]">
            <Controller
              control={control}
              name="title"
              render={({ field: { value, onChange } }) => (
                <Input value={value} onChange={onChange} />
              )}
            />
          </FormRow>
          <FormRow label="Description" labelClassName="text-[#000]">
            <Controller
              control={control}
              name="description"
              render={({ field: { value, onChange } }) => (
                <TextArea value={value} onChange={onChange} rows={4} />
              )}
            />
          </FormRow>
          <FormRow label="Assignee" labelClassName="text-[#000]">
            <Controller
              name="assignee_ids"
              control={control}
              render={({ field: { value, onChange } }) => (
                <Select
                  value={value}
                  onChange={onChange}
                  mode="multiple"
                  placeholder="Please select"
                  allowClear
                  style={{ width: "100%" }}
                  options={users.map((user: any) => ({
                    value: user.id,
                    label: (
                      <div>
                        <Avatar src={user.avatar_url} />
                        <span> {user.username}</span>
                      </div>
                    ),
                  }))}
                />
              )}
            />
          </FormRow>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </form>
      </div>
    </div>
  );
}

export default NewIssues;
