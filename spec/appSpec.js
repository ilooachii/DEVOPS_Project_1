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

    it("should return 'deux lampes jaune allumée' when the time is 0:02", function () {
       
        const time = "0:02";

        const result = new BerlinClock().oneMinuteLine(time);

        expect(result).toBe("deux lampes jaune allumée");
    });

    it("should return 'trois lampes jaune allumée' when the time is 0:03", function () {
       
        const time = "0:03";

        const result = new BerlinClock().oneMinuteLine(time);

        expect(result).toBe("trois lampes jaune allumée");
    });
    
    it("should return 'quatre lampes jaune allumée' when the time is 0:04", function () {
       
        const time = "0:04";

        const result = new BerlinClock().oneMinuteLine(time);

        expect(result).toBe("quatre lampes jaune allumée");
    });


});