import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const DropDownNavbar = () => {
  return (
    <div className="bg-transparent">
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic">user</Dropdown.Toggle>
        <Dropdown.Menu className="me-5">
          <Dropdown.Item>Peminjaman</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>keluar</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default DropDownNavbar;
