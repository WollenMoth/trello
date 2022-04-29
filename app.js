require("dotenv").config();

const { KEY, TOKEN } = process.env;

if (!KEY || !TOKEN)
    throw new Error("No está configurado el API key o el API token");
