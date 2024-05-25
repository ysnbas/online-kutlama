export const postGeneratedVideo = async (params) => {
  try {
    const response = await fetch(
      `${process.env.BASE_URL}/runwayml/generate_video/`,
      {
        method: "POST",
        body: JSON.stringify(params),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("API yanıtı başarısız");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
