import { useState } from "react";
import Header from "./header/Header";
import Order from "./order/Order";

import "./Page.scss";
import Car from "./car/Car";
import Destination from "./destination/Destination";

const Page = () => {
  const [currentTab, setCurrentTab] = useState<number>(0);

  const onChanggeCurrentTab = (tab: number) => {
    setCurrentTab(tab);
  };
  return (
    <div className="Page">
      <Header
        onChanggeCurrentTab={onChanggeCurrentTab}
        currentTab={currentTab}
      />
      <div className="Page__content">
        {(currentTab === 0 && <Order />) ||
          (currentTab === 1 && <Car />) ||
          (currentTab === 3 && <Destination />)}
      </div>
    </div>
  );
};

export default Page;
