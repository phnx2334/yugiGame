import { IcardData } from "../types/card";

const apiURL = 'https://yugi-api.herokuapp.com/cards'

export const addCard = async (body:IcardData) =>{

    try {
        await fetch(apiURL, {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
          },
        });
      } catch (error) {
        console.log("Error saving new card", error);
      }
}