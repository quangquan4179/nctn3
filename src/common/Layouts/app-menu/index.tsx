import React, { useEffect, useState } from "react";
import {
  HomeOutlined,
  SendOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { ItemType } from "antd/es/menu/hooks/useItems";
import PageList from "@/common/helpers/page";
import { signOut } from "next-auth/react";

const AppMenu: React.FC = () => {
  const [menuKey, setMenuKey] = useState({
    selected: "",
    open: "",
  });
  function getItem(
    label: React.ReactNode,
    link?: string,
    icon?: React.ReactNode,
    key?: string[],
    children?: ItemType[],
    type?: "group",
  ): ItemType {
    const newKey = key ? key.join("***") : link;
    return {
      key: newKey,
      icon,
      children,
      label: link ? (
        <Link href={link}>{label}</Link>
      ) : (
        <span className=" text-[18px]">{label}</span>
      ),
      type,
    } as ItemType;
  }
  const items: ItemType[] = [
    getItem(
      PageList.homePage.text,
      PageList.homePage.url,
      <HomeOutlined className="!text-[24px] !" />,
    ),
    getItem(
      PageList.user.text,
      PageList.user.url,
      <UserOutlined className="!text-[24px] !" />,
    ),
    getItem(
      PageList.project.text,
      PageList.project.url,
      <SettingOutlined className="!text-[24px]  " />,
    ),
    getItem(
      PageList.group.text,
      PageList.group.url,
      <SendOutlined className="!text-[24px]  " />,
    ),
  ];
  const router = useRouter();
  useEffect(() => {
    if (router.isReady) {
      if (router.pathname.includes("pattern")) {
        setMenuKey({
          open: PageList.patternRegister.url,
          selected: PageList.patternRegister.url,
        });
      } else {
        setMenuKey({
          open: router.pathname,
          selected: router.pathname,
        });
      }
    }
  }, [router.isReady, router.pathname]);
  const handleOut = async () => {
    await signOut();
  };
  return (
    <>
      <Menu
        theme="dark"
        mode="inline"
        className="app-menu"
        items={items}
        selectedKeys={[menuKey.selected]}
        openKeys={[menuKey.open]}
      />
      <Button onClick={handleOut}>Logout</Button>
    </>
  );
};

export default AppMenu;
