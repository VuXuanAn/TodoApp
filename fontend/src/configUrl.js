const baseUrl = "http://localhost:3100";

export const api = `${baseUrl}/todo`;

export const generatePublicUrl = (fileName) => {
    return `${baseUrl}/public/${fileName}`;
};