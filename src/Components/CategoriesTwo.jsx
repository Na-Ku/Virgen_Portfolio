import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const CategoriesTwo = () => {
  return (
    <div>
      <Tabs defaultActiveKey="profile" id="justify-tab-example" className="mb-3" justify>
        <Tab eventKey="first" title="Pulsa">
          Tab content for Home
        </Tab>
        <Tab eventKey="second" title="Paket Data">
          Tab content for Profile
        </Tab>
        <Tab eventKey="third" title="Listrik">
          Tab content for Loooonger Tab
        </Tab>
      </Tabs>
    </div>
  );
};

export default CategoriesTwo;
