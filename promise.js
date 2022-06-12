const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async(emosi) => {
    try {
        let theater1 = await promiseTheaterIXX();
        let theater2 = await promiseTheaterVGC();
        let theater = theater1.concat(theater2);
        let total = theater.filter(em => em.hasil === emosi);
        return total.length;
    } catch (err) {
        console.log(err);

    }
};

module.exports = {
    promiseOutput,
};