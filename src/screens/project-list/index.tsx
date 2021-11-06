import React, { useEffect, useState } from "react";
import { List } from "./list";
import { SearchPanel } from "screens/project-list/search-panel";
import qs from "qs";
import { cleanObject, useDebounce, useMount } from "screens/utils/index";
import { useHttp } from "../../https/index";
console.log(qs.stringify("123"));
export const ProjectList = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "1",
  });

  const [user, setUser] = useState([]);

  const [list, setList] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;

  const client = useHttp();

  const debounceParam = useDebounce(param, 1000);

  useEffect(() => {
    client("projects", { data: cleanObject(debounceParam) }).then(setList);
    // fetch(
    //   `${apiUrl}/projects?${qs.stringify(cleanObject(debounceParam))}`
    // ).then(async (response) => {
    //   if (response.ok) {
    //     setList(await response.json());
    //   }
    // });
  }, [debounceParam]);

  useMount(() => {
    client("users").then(setUser);
    // fetch(
    // fetch(`${apiUrl}/users`).then(async (response) => {
    //   if (response.ok) {
    //     setUser(await response.json());
    //   }
    // });
  });

  return (
    <div>
      <List list={list} users={user}></List>
      <SearchPanel param={param} setParam={setParam} users={user}></SearchPanel>
    </div>
  );
};
