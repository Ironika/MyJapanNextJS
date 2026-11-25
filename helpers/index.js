import Axios from "axios";

export const getApiDatas = async (
  path,
  page,
  prevPage,
  uid,
  onlyBookmark,
  link,
  search
) => {
  let url = `${process.env.api}${path}`;
  if (page) url = `${url}?page=${page}`;
  if (prevPage) url = `${url}&prevpage=${prevPage}`;
  if (uid) url = `${url}&uid=${uid}`;
  if (onlyBookmark) url = `${url}&onlybookmark=${onlyBookmark}`;
  if (link) url = `${url}?link=${link}`;
  if (search) url = `${url}?search=${search}`;
  try {
    console.log(url);
    const { data } = await Axios.get(url);
    return data;
  } catch (e) {
    console.log(e);
  }

  return [];
};

export const getScanReader = async (link, title, chapter) => {
  const { data } = await Axios.get(`${process.env.api}scansva`, {
    params: { link, title, chapter },
    timeout: 50000,
  });
  if (!Array.isArray(data.scans) || !Array.isArray(data.options)) {
    throw new Error("Invalid chapter response");
  }
  return data;
};

export const postApiDatas = async (path, datas) => {
  let url = `${process.env.api}${path}`;
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
  let url = `${process.env.api}${path}`;
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
