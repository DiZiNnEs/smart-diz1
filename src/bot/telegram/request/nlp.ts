import fetch from "node-fetch";

export const getAnswerForBot = async (text: string) => {
  const request = await fetch("http://localhost:3000/api/v1/getAnswer/", {
    method: "POST",
    body: JSON.stringify({
      question: text
    })
  });
  const response = await request.json();
  console.log(response);
  return response.message;
};
