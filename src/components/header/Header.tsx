// import TabHeader from "../tabui/TabHeader"

import { Tab, Tabs } from "@mui/material";
import { menus } from "variable";

interface IProps {
  currentTab: number;
  onChanggeCurrentTab: (tab: number) => void;
}

const Header = ({ currentTab, onChanggeCurrentTab }: IProps) => {
  return (
    <Tabs value={currentTab}>
      {menus.map((m, index) => (
        <Tab
          value={index}
          key={index}
          onClick={() => {
            onChanggeCurrentTab(index);
          }}
          label={m}
        />
      ))}
    </Tabs>
  );
};

export default Header;
