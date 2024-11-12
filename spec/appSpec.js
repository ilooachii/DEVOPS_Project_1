import { BerlinClock } from "../src/app.js";

describe("minute line", function () {

    
    it("should return '0 lampe allumée' when the time is 0:00", function () {
        const time = "0:00";

        const result = new BerlinClock().oneMinuteLine(time);

        expect(result).toBe("0 lampe allumée");
    });

    it("should return '1 lampe jaune allumée' when the time is 0:01 ", function () {
        
        const time = "0:01";

        const result = new BerlinClock().oneMinuteLine(time);

        expect(result).toBe("1 lampe jaune allumée");
    });

    it("should return '2 lampes jaune allumée' when the time is 0:02", function () {
       
        const time = "0:02";

        const result = new BerlinClock().oneMinuteLine(time);

        expect(result).toBe("2 lampes jaune allumée");
    });

    it("should return '3 lampes jaune allumée' when the time is 0:03", function () {
       
        const time = "0:03";

        const result = new BerlinClock().oneMinuteLine(time);

        expect(result).toBe("3 lampes jaune allumée");
    });
    
    it("should return '4 lampes jaune allumée' when the time is 0:04", function () {
       
        const time = "0:04";

        const result = new BerlinClock().oneMinuteLine(time);

        expect(result).toBe("4 lampes jaune allumée");
    });

    
    it("should return '0 lampe allumé' when given 0:05 ", function () {
        const time = "0:05";

        const result = new BerlinClock().oneMinuteLine(time);

        expect(result).toBe("0 lampe allumée");
    });
});

// TEST FIVE MINUTES BLOCK à partir de 6
describe("Five minutes block", function () {    
    it("should return 'OOOOOOOOOOO' when the time is 0:00", function () {

      const time = "0:00";
      const result = new BerlinClock().fiveMinutesBlock(time);
  
      expect(result).toBe("OOOOOOOOOOO");
    });

    it("should return 'YOOOOOOOOOO' when the time is 0:05", function () {

      const time = "0:05";
      const result = new BerlinClock().fiveMinutesBlock(time);
  
      expect(result).toBe("YOOOOOOOOOO");
    });

    it("should return 'YYOOOOOOOOO' when the time is 0:10", function () {

      const time = "0:10";
      const result = new BerlinClock().fiveMinutesBlock(time);
  
      expect(result).toBe("YYOOOOOOOOO");
    });

    it("should return 'YYROOOOOOOO' when the time is 0:15", function () {

      const time = "0:15";
      const result = new BerlinClock().fiveMinutesBlock(time);
  
      expect(result).toBe("YYROOOOOOOO");
    });

    it("should return 'YYRYYR00000' when the time is 0:30", function () {

      const time = "0:30";
      const result = new BerlinClock().fiveMinutesBlock(time);
  
      expect(result).toBe("YYRYYR00000");
    });

    it("should return 'YYRYYRYYRYY' when the time is 0:55", function () {

      const time = "0:55";
      const result = new BerlinClock().fiveMinutesBlock(time);
  
      expect(result).toBe("YYRYYRYYRYY");
    });
    // FINI LES TEST A 12
});