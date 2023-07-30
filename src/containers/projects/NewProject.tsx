import { FormRow } from "@/common/form/FormRow";
import { Button, Input } from "antd";
import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import { Controller, useForm } from "react-hook-form";
const TextArea = Input.TextArea;

function NewProject() {
  const { control, handleSubmit } = useForm();
  const router = useRouter();
  const { id } = router.query;
  const onSubmit = async (data: any) => {
    const res = await axios.post("/api/project/create", {
      ...data,
      namespace_id: id,
    });
    router.push(`/groups/${id}`);
  };
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormRow label="Project name" labelClassName="text-[#000]">
            <Controller
              control={control}
              name="name"
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
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </form>
      </div>
    </div>
  );
}

export default NewProject;
