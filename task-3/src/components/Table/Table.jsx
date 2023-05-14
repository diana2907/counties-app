import { TableRow } from "../TableRow/TableRow";
import { MainTable, Title, HeadCell } from "./Table.styled";

export const Table = ({ universitiesList, setCheckedList, checkedList }) => {
  return (
    <>
      {universitiesList.length > 0 && (
        <MainTable>
          <Title>Universities</Title>
          <thead>
            <tr>
              <HeadCell>N</HeadCell>
              <HeadCell>Name</HeadCell>
              <HeadCell>Country</HeadCell>
              <HeadCell>Site</HeadCell>
              <HeadCell>Select</HeadCell>
            </tr>
          </thead>

          <tbody>
            {universitiesList.map((item, index) => (
              <TableRow
                checkedList={checkedList}
                setCheckedList={setCheckedList}
                key={index}
                item={item}
                index={index}
              />
            ))}
          </tbody>
        </MainTable>
      )}
    </>
  );
};
