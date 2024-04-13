export async function useApiAuth(path, options) {
  let header = {};
  let responses;
  const token = useCookie("XSRF-TOKEN");

  if (token.value) {
    header["X-XSRF-TOKEN"] = token.value;
    header["accept"] = "application/json";
  }

  let { data } = await useFetch("http://localhost:8000" + path, {
    credentials: "include",
    watch: false,
    ...options,
    headers: {
      ...header,
      ...options?.headers,
    },
    onResponse({ request, response, options }) {
      responses = response;
      // switch (response.status) {
      //   case 200:
      //   case 401: //Not logged in
      //   case 410: //Session expired
      //   case 503: //Down for maintenance
      //     useUserStore().resetUser();
      //     window.location.href = "/";
      //     break;
      //   case 500:
      //     alert("Oops, something went wrong! The team has been notified.");
      //     break;
      //   default:
      //     // return Promise.reject(response._data.messages);
      //     return alert(response._data.messages);
      // }
    },
  });

  return {
    data,
    responses,
  };
}
