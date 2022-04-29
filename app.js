require("dotenv").config();

const { KEY, TOKEN } = process.env;

if (!KEY || !TOKEN)
    throw new Error("No está configurado el API key o el API token");

const Trello = require("trello");
const trello = new Trello(KEY, TOKEN);

const cardTitle = `Nueva Card ${new Date()}`;
const cardDescription = "Descripción de la card";
const listId = "626bf17bfaadfe58f9eb19d8";

trello.addCard(cardTitle, cardDescription, listId, (error, trelloCard) => {
    if (error) console.log("Could not create card:", error);
    else console.log("Created card:", trelloCard);
});

const getCards = async () => {
    const cards = await trello.getCardsOnList(listId);
    console.log("List of cards:", cards);
};

getCards();
