import api from "./api";

export const me = (id: string) => {
  const res = api.get(`/users/${id.toString()}`);
  return res;
};

export const users = ({
  page,
  per_page,
}: {
  page: number;
  per_page: number;
}) => {
  const res = api.get(`/users?page=${page}&per_page=${per_page}`);
  return res;
};
