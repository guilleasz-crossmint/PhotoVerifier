"use server";
interface FetchOptions {
  method: string;
  headers: {
    "X-API-KEY": string;
    "Content-Type": string;
  };
  body: string;
}

const X_API_KEY =
  "sk_staging_61kzLNnoeJ71ehiFZGyRNo1VtMkRwXsaQHPjnx18EabnnRHidfXFr7hdUkDAd4Y232iD6jLqBqWXEQzdXx2g7L8W5m91q1iuG1t4p9YGEAcP71oyzzFmnvybpdEZyWyCFmdJnqwhJY5iN7gW9D28w371JUkuz3RA2yvxxvbfjjPFbS2qdQrwmS9G3wKkPurcjc1T9wwXSLThifLQwN1d1sp6";
const collectionId = "fabe1357-fbf9-4340-a447-cf2d8a8fcd46";

export const mintNFT = (email: string, image: string) => {
  const options: FetchOptions = {
    method: "POST",
    headers: {
      "X-API-KEY": X_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      recipient: `email:${email}:polygon`,
      metadata: {
        name: image,
        image: `https://6e869181ce3c.ngrok.app/gallery/${image}`,
      },
      reuploadLinkedFiles: true,
      compressed: true,
    }),
  };

  return fetch(
    `https://staging.crossmint.com/api/2022-06-09/collections/${collectionId}/nfts`,
    options
  )
    .then((response: Response) => response.json())
    .then((response: any) => console.log(response))
    .catch((err: any) => console.error(err));
};
