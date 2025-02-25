import { apiInstanceAuth } from "../utils/database";

export const getCourses = async () =>
  apiInstanceAuth.get("/courses").then((res) => res.data);
