import { BerlinClock } from "../src/app.js";

describe("minute line", function () {

    it("should return 'aucune lampe allumée' when the time is 0:00", function () {
        const time = "0:00";

        const result = new BerlinClock().oneMinuteLine(time);

        expect(result).toBe("aucune lampe allumée");
    });

    it("should return '1ère lampe jaune allumée' when the time is 0:01 ", function () {
        
        const time = "0:01";

        const result = new BerlinClock().oneMinuteLine(time);

        expect(result).toBe("1ère lampe jaune allumée");
    });

});