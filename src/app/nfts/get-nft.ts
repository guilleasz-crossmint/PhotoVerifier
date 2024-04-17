type ApiResponse = {
  data: any;
  status: string;
  message?: string;
};
const X_API_KEY =
  "sk_staging_61kzLNnoeJ71ehiFZGyRNo1VtMkRwXsaQHPjnx18EabnnRHidfXFr7hdUkDAd4Y232iD6jLqBqWXEQzdXx2g7L8W5m91q1iuG1t4p9YGEAcP71oyzzFmnvybpdEZyWyCFmdJnqwhJY5iN7gW9D28w371JUkuz3RA2yvxxvbfjjPFbS2qdQrwmS9G3wKkPurcjc1T9wwXSLThifLQwN1d1sp6";
const options: RequestInit = {
  method: "GET",
  headers: {
    "X-API-KEY": X_API_KEY,
  },
};
export const getNFTFromWallet = (wallet: string) => {
  return fetch(
    `https://staging.crossmint.com/api/2022-06-09/wallets/polygon:${wallet}/nfts`,
    options
  )
    .then((response) => response.json() as Promise<ApiResponse>)
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};
