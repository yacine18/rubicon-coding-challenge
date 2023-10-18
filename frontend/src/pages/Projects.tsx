import React from "react";
import { Table } from "reactstrap";
import { MdDelete } from "react-icons/md";
import { BiSolidPencil } from "react-icons/bi";

const Projects = () => {
  return (
    <>
      <Table borderless className="container mt-5 text-center">
        <thead>
          <tr style={{ color: "#b9b9b9" }}>
            <th>Lable</th>
            <th>Description</th>
            <th>Started at</th>
            <th>Ended at</th>
            <th>CreatedAt</th>
            <th>UpdatedAt</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          <tr>
            <th scope="row">Lorem Ipsum</th>
            <td>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </td>
            <td>17/10/2023</td>
            <td>18/10/2023</td>
            <td>17/10/2023</td>
            <td>18/10/2023</td>
            <td style={{color: "#8903dc"}}>
              <BiSolidPencil size={20}  style={{margin: "5%"}}/>
              <MdDelete size={20} />
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default Projects;
