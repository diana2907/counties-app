import { Form } from "../Form/Form";
import { useEffect, useState } from "react";
import { fetchCountry } from "../../helpers/fetchApi";
import { Table } from "../Table/Table";
import { Counter } from "../Counter/Counter";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import { Loader } from "../Loader/Loader";

export const UniversitiesApp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [universitiesList, setUniversitiesList] = useState(() => {
    const savedList = window.localStorage.getItem("savedList");
    if (savedList !== null) {
      return JSON.parse(savedList);
    }
    return [];
  });
  const [checkedList, setCheckedList] = useState(() => {
    const checked = window.localStorage.getItem("checkedList");
    if (checked !== null) {
      return JSON.parse(checked);
    }
    return [];
  });

  useEffect(() => {
    window.localStorage.setItem("savedList", JSON.stringify(universitiesList));
  }, [universitiesList]);

  useEffect(() => {
    window.localStorage.setItem("checkedList", JSON.stringify(checkedList));
  }, [checkedList]);

  const sendForm = (evt) => {
    evt.preventDefault();
    setUniversitiesList([]);
    setCheckedList([]);

    const query = evt.target.elements.query.value;
    if (query === "") {
      NotificationManager.warning(
        "The field is empty. Enter country",
        "",
        2000
      );
      return;
    }
    fetchQuery(query);
  };

  const resetForm = () => {
    setUniversitiesList([]);
    setCheckedList([]);
  };

  const fetchQuery = async (value) => {
    setIsLoading(true);
    try {
      const universities = await fetchCountry(value);
      if (universities.length === 0) {
        NotificationManager.error("Not found", "", 2000);
      } else {
        setUniversitiesList(universities);
      }
    } catch (error) {
      NotificationManager.error("Error", "", 2000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Form resetForm={resetForm} sendForm={sendForm} />
      {universitiesList.length > 0 && <Counter checkedList={checkedList} />}
      {isLoading && <Loader />}
      <Table
        setCheckedList={setCheckedList}
        checkedList={checkedList}
        universitiesList={universitiesList}
      />
      <NotificationContainer />
    </>
  );
};
