export const uploadImage = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", process.env.REACT_APP_CLOUDINARY_PRESET);
  const result = await fetch(process.env.REACT_APP_CLOUDINARY_URL, {
    method: "POST",
    body: data,
  });
  const response = await result.json();
  return response.url;
};
