/**
 * TODO: a getUsers függvény futtasson egy fetch kérést. 
 * Hívd meg a fetch függvényt a kapott paraméterekkel!
 * 
 * TODO: parse-old a kapott válaszban lévő adatokat a .json-metódussal!
 * 
 * TODO: add vissza a parse-olt adatokat.
 * 
 * CSAK A FÜGGVÉNY TÖRZSÉBEN DOLGOZZ!
 * 
 * PÉLDÁK: https://developer.mozilla.org/en-US/docs/Web/API/fetch#examples
 * 
 * LEÍRÁS: A függvény a kapott paraméterek alapján indít egy fetch kérést.
 * Miután a válasz megérkezett, parse-olja az adatokat a response.json()
 * metódus segítségével.
 * Majd ezekkel az adatokkal tér vissza.
 * @param {string} url a távoli erőforrás címe, ahonnan lekérjük az adatokat
 * @returns {[{}, {}]} objektumok tömbjével tér vissza
 */
const getUsers = async (url = '') => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

/**
 * TODO: exportáld ki helyesen a getUsers függvényt!
 */
export {
    getUsers
}
