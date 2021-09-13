import React, { useEffect, useState } from "react";
import { List } from "./list";
import { SearchPanel } from "./search-panel";
import qs from "qs";
import { cleanObject, useDebounce, useMount } from "../utils/index";

export const ProjectList = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "1",
  });
  

  const [user, setUser] = useState([]);

  const [list, setList] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;

  const debounceParam = useDebounce(param,1000)

  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debounceParam))}`).then(
      async (response) => {
        if (response.ok) {
          setList(await response.json());
        }
      }
    );
  }, [debounceParam]);

  useMount(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUser(await response.json());
      }
    });
  });

  return (
    <div>
      <List list={list} user={user}></List>
      <SearchPanel param={param} setParam={setParam} user={user}></SearchPanel>
    </div>
  );
};
