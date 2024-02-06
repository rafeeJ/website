"use server";

export const getCV = async () => {
  try {
    const fileId = process.env.CV_DOC_ID;
    const api = process.env.DOCS_API_KEY;
    const cvURL = `https://www.googleapis.com/drive/v3/files/${fileId}/export?key=${api}&?mimetype=application/pdf`;
    const response = await fetch(cvURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/pdf",
        responseType: "blob",
      },
    });

    const blob = await response.blob();

    const file = new File([blob], "rafee_jenkins_cv.pdf", {
      type: "application/pdf",
    });

    return file;
  } catch (error) {
    console.error(error);
    return false;
  }
};
