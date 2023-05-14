import {
  Cell,
  CheckLabel,
  CheckMark,
  Checkbox,
  InputCheck,
  Link,
  Row,
} from "./TableRow.styled";
import { useEffect, useState } from "react";

export const TableRow = ({ item, index }) => {
  const [checkedList, setCheckedList] = useState(() => {
    const checked = window.localStorage.getItem("checkedList");
    if (checked !== null) {
      return JSON.parse(checked);
    }
    return [];
  });

  useEffect(() => {
    window.localStorage.setItem("checkedList", JSON.stringify(checkedList));
  }, [checkedList]);

  const onChange = (evt) => {
    const isChecked = evt.target.checked;
    const checked = JSON.parse(window.localStorage.getItem("checkedList"));

    if (isChecked && checked) {
      checked.push(index);
      window.localStorage.setItem("checkedList", JSON.stringify(checked));
      setCheckedList(checked);
    } else {
      const filtered = checked.filter((item) => item !== index);
      window.localStorage.setItem("checkedList", JSON.stringify(filtered));
      setCheckedList(filtered);
    }
  };

  return (
    <Row key={index}>
      <Cell>{index + 1}</Cell>
      <Cell>{item.name}</Cell>
      <Cell>{item.country}</Cell>
      <Cell>
        <Link href={item.web_pages}>{item.web_pages}</Link>
      </Cell>
      <Cell>
        <InputCheck
          className="visually-hidden"
          type="checkbox"
          name="add"
          id={index}
          onChange={onChange}
          checked={checkedList.includes(index)}
          required
        />
        <CheckLabel className="check-label" htmlFor={index}>
          <Checkbox className="checkbox">
            <CheckMark />
          </Checkbox>
        </CheckLabel>
      </Cell>
    </Row>
  );
};
