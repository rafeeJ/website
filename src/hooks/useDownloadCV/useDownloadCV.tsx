import { useEffect, useState } from "react";

export const useDownloadCV = () => {
  const [loading, setLoading] = useState(false);
  const [cv, setCV] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const response = await fetch("/api/cv", {
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

        setCV(file);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError("Error fetching CV");
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return { loading, cv, error };
};
