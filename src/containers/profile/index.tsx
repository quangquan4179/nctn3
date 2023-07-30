import React from "react";
import { useSession } from "next-auth/react";
import { Avatar, Button, Input, Row } from "antd";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";

const ProfileContainer = () => {
  const { data: session } = useSession();

  const {
    control,
    handleSubmit,
    reset,
    formState: { isDirty },
  } = useForm();

  const onSubmit = async (data: any) => {
    const res = await axios.post("/api/setting", {
      email: session?.user?.email,
      token: data.token,
    });
  };

  return (
    <div className="text-[#000] w-[1000px] ml-6">
      <Row>
        <div className="">
          <div>
            <Avatar src={session?.user?.image} size={64} />
          </div>
          <div>
            <h2 className="text-lg">{session?.user?.name}</h2>
          </div>
        </div>
      </Row>
      <Row>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="token"
            control={control}
            render={({ field: { name, onChange, value } }) => (
              <Input name={name} onChange={onChange} value={value} />
            )}
          />
          <Button htmlType="submit" disabled={!isDirty}>
            Save
          </Button>
        </form>
      </Row>
    </div>
  );
};

export default ProfileContainer;
