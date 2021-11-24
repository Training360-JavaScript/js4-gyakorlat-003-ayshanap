/**
 * TODO: hozd létre a getProducts ASZINKRON függvénykifejezést!
 * 
 * TODO: egy paramétert vár, amely az URL-címet tartalmazza!
 * 
 * TODO: a getProducts függvény futtasson egy fetch kérést. 
 * Hívd meg a fetch függvényt a kapott paraméterekkel!
 * 
 * TODO: parse-old a kapott válaszban lévő adatokat a .json-metódussal!
 * 
 * TODO: rendezd a kapott adatokat növekvő sorrendbe ár (price) szerint!
 * 
 * TODO: távolítsd el az adatok közül a 25-nél alacsonyabb árú (price) termékeket!
 * 
 * TODO: add vissza a rendezett és szűrt tömböt!
 * 
 * TODO: try/catch blokk segítségével oldd meg a hibakezelést!
 * A függvény törzsében található utasításokat foglald egy try blokkba!
 * Ha hiba keletkezik, akkor írd ki a hibát a konzolra, és egy üres tömbbel 
 * térj vissza!
 * 
 * PÉLDÁK: https://developer.mozilla.org/en-US/docs/Web/API/fetch#examples
 * 
 * LEÍRÁS: A függvény a kapott paraméterek alapján indít egy fetch kérést.
 * Miután a válasz megérkezett, parse-olja az adatokat a response.json()
 * metódus segítségével.
 * Majd ezekkel az adatokkal tér vissza.
 * Hiba esetén üres tömböt ad vissza, és logolja a hibát.
 * @param {string} url a távoli erőforrás címe, ahonnan lekérjük az adatokat
 * @returns {[{}, {}] | []} objektumok tömbjével tér vissza vagy hiba esetén 
 * üres tömbbel
 */
const getProducts = async (url = '') => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const dataSort = data.sort((a, b) => a.price - b.price);
        const dataFilter = dataSort.filter(item => item.price >= 25);
        return dataFilter;
    } catch {
        console.error(error);
        return [];
    }
};
/**
 * TODO: exportáld ki helyesen a getProducts függvényt!
 */
export {
    getProducts
};