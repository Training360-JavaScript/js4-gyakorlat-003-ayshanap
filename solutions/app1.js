/**
 * TODO: a startFetch függvény futtasson egy fetch kérést. 
 * Hívd meg a fetch függvényt a kapott paraméterekkel!
 * CSAK A 16. SORBAN DOLGOZZ!
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
const startFetch = async (url = '') => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

/**
 * TODO: exportáld ki helyesen a startFetch függvényt!
 * CSAK A 26. SORBAN DOLGOZZ!
 */
export {
    startFetch
}
