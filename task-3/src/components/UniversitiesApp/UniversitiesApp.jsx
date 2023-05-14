import { Form } from "../Form/Form";
import { useEffect, useState } from "react";
import { fetchCountry } from "../../helpers/fetchApi";
import { Table } from "../Table/Table";
import { Counter } from "../Counter/Counter";

export const UniversitiesApp = () => {
  const [universitiesList, setUniversitiesList] = useState(() => {
    const savedList = window.localStorage.getItem("savedList");
    if (savedList !== null) {
      return JSON.parse(savedList);
    }
    return [];
  });

  useEffect(() => {
    window.localStorage.setItem("savedList", JSON.stringify(universitiesList));
  }, [universitiesList]);

  const sendForm = (evt) => {
    evt.preventDefault();

    setUniversitiesList([]);
    localStorage.removeItem("checkedList");
    const query = evt.target.elements.query.value;
    if (query === "") {
      alert("The field is empty. Enter country");
      return;
    }
    fetchQuery(query);
  };

  const resetForm = () => {
    setUniversitiesList([]);
    localStorage.removeItem("checkedList");
    localStorage.removeItem("savedList");
  };

  const fetchQuery = async (value) => {
    try {
      const universities = await fetchCountry(value);
      if (universities.length === 0) {
        alert("Nothing");
      } else {
        setUniversitiesList(universities);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Form resetForm={resetForm} sendForm={sendForm} />
      <Counter />
      <Table universitiesList={universitiesList} />
    </>
  );
};
