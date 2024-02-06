import { NextResponse } from "next/server";

export async function GET() {
  try {
    const fileId = process.env.CV_DOC_ID;
    const api = process.env.DOCS_API_KEY;

    if (!fileId || !api) {
      throw new Error("CV file ID or API key not found");
    }

    const cvURL = `https://www.googleapis.com/drive/v3/files/${fileId}/export?key=${api}&mimeType=application/pdf`;

    const response = await fetch(cvURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/pdf",
        responseType: "blob",
      },
      referrer: "https://rafeejenkins.com",
    });

    if (!response.ok) {
      throw new Error("Error fetching CV");
    }

    const blob = await response.blob();
    return new NextResponse(blob, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
      },
    });
  } catch (e) {
    console.log(e);
    return new NextResponse("Error fetching CV", {
      status: 500,
    });
  }
}
