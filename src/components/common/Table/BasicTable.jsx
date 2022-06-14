import React from "react";
import { Table } from "react-bootstrap";

const BasicTable = (props) => {

  const { heading, head, data, tableWrClassName } = props;

  return (
    <React.Fragment>
      <div className={ tableWrClassName ? tableWrClassName : 'basic-table'}>

        {
          heading ?
            <div className="table-heading mb-2">
              {heading}
            </div>
            : ''
        }

        {head || data ?
          <Table striped bordered hover className="mb-3">
            {head ?
              <thead>
                <tr>
                  {
                    head.map((tdItem, index) => {
                      return <th> {tdItem} </th>
                    })
                  }
                </tr>
              </thead>
              : ''
            }
            {data ?
              <tbody>
                {
                  data.map((item, index) => {
                    return <tr key={index}>
                      {
                        (typeof item === "object") ?
                          item.map((value, idx) => {
                            return <td key={idx}> {value} </td>
                          })
                          :
                          <td> {item} </td>
                      }
                    </tr>
                  })
                }
              </tbody>
              : ''
            }
          </Table>
          :
          <p>No records found.</p>
        }
      </div>
    </React.Fragment>
  );
};

export default BasicTable;
