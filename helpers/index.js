import Axios from "axios";

const apiUrl = (path, server = false) => {
  if (!server) return `/api/${path}`;
  const origin = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : `http://127.0.0.1:${process.env.PORT || 3000}`;
  return `${origin}/api/${path}`;
};

export const getApiDatas = async (
  path,
  page,
  prevPage,
  uid,
  onlyBookmark,
  link,
  search,
  server = false
) => {
  let url = apiUrl(path, server);
  if (page) url = `${url}?page=${page}`;
  if (prevPage) url = `${url}&prevpage=${prevPage}`;
  if (uid) url = `${url}&uid=${uid}`;
  if (onlyBookmark) url = `${url}&onlybookmark=${onlyBookmark}`;
  if (link) url = `${url}?link=${link}`;
  if (search) url = `${url}?search=${search}`;
  try {
    const { data } = await Axios.get(url, server ? { timeout: 15000 } : undefined);
    return data;
  } catch (e) {
    console.error("API GET request failed:", e.message);
  }

  return server ? undefined : [];
};

export const getScanReader = async (link, title, chapter) => {
  const { data } = await Axios.get(apiUrl("scansva"), {
    params: { link, title, chapter },
    timeout: 50000,
  });
  if (!Array.isArray(data.scans) || !Array.isArray(data.options)) {
    throw new Error("Invalid chapter response");
  }
  return data;
};

export const postApiDatas = async (path, datas) => {
  let url = apiUrl(path);
  try {
    const { data } = await Axios.post(url, datas);
    return data;
  } catch (e) {
    console.error("API POST request failed:", e.message);
    return {
      status: e.response?.status || 503,
      err: e.response?.data?.err || "The service is unavailable. Please try again.",
    };
  }
};

export const putApiDatas = async (path, datas) => {
  let url = apiUrl(path);
  try {
    const { data } = await Axios.put(url, datas);
    return data;
  } catch (e) {
    console.error("API PUT request failed:", e.message);
    return {
      status: e.response?.status || 503,
      err: e.response?.data?.err || "The service is unavailable. Please try again.",
    };
  }
};
