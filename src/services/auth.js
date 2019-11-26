import rest from './base_request';

export const login = (payload) => {
  return rest.post("/auth/login", payload);
}

export const getCurrentUser = () => {
  return rest.get("/hr/employee", {
    headers: {
      Authorization: localStorage.getItem("token")
    }
  })
}