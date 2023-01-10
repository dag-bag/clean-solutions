/** @format */

export const addDataToQuiz = async (allData: any) => {
  const res = await fetch("/api/quiz", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(allData),
  });
  const data = await res.json();
  console.log(data);
};
