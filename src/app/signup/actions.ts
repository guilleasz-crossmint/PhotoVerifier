interface FetchOptions {
    method: string;
    headers: {
        "X-API-KEY": string;
        "Content-Type": string;
    };
    body: string;
}
const X_API_KEY = "sk_staging_61kzLNnoeJ71ehiFZGyRNo1VtMkRwXsaQHPjnx18EabnnRHidfXFr7hdUkDAd4Y232iD6jLqBqWXEQzdXx2g7L8W5m91q1iuG1t4p9YGEAcP71oyzzFmnvybpdEZyWyCFmdJnqwhJY5iN7gW9D28w371JUkuz3RA2yvxxvbfjjPFbS2qdQrwmS9G3wKkPurcjc1T9wwXSLThifLQwN1d1sp6";
// Función para crear una billetera en Crossmint, acepta un email como parámetro
export const createWallet = (email: string) => {
    const options: FetchOptions = {
        method: "POST",
        headers: {
            "X-API-KEY": X_API_KEY,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, chain: "polygon" }),
    };

    fetch("https://staging.crossmint.com/api/v1-alpha1/wallets", options)
        .then((response: Response) => response.json())
        .then((response: any) => console.log(response))
        .catch((err: any) => console.error(err));
};
