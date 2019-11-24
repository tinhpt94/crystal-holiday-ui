import rest from './base_request';

export const login = (payload) => {
  return rest.post("/auth", payload);
}

export const getCurrentUser = () => {
  return rest.get("/hr/user/", {
    headers: {
      Authorization: localStorage.getItem("token")
    }
  })
}