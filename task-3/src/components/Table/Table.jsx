import { TableRow } from "../TableRow/TableRow";
import { MainTable, Title, HeadCell } from "./Table.styled";

export const Table = ({ universitiesList }) => {
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
              <TableRow key={index} item={item} index={index} />
            ))}
          </tbody>
        </MainTable>
      )}
    </>
  );
};
