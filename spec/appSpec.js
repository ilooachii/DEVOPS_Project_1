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

    it("should return 'YYRYYROOOOO' when the time is 0:30", function () {

      const time = "0:30";
      const result = new BerlinClock().fiveMinutesBlock(time);
  
      expect(result).toBe("YYRYYROOOOO");
    });

    it("should return 'YYRYYRYYRYY' when the time is 0:55", function () {

      const time = "0:55";
      const result = new BerlinClock().fiveMinutesBlock(time);
  
      expect(result).toBe("YYRYYRYYRYY");
    });
    // FINI LES TEST A 12
});

describe("One hour line", function () {    
  it("should display 'OOOO' when the time is 0:00", function () {

      const time = "0:00";
      const result = new BerlinClock().oneHourLine(time);

      expect(result).toBe("OOOO");
  });

  it("should display 'ROOO' when the time is 1:00", function () {

    const time = "1:00";
    const result = new BerlinClock().oneHourLine(time);

    expect(result).toBe("ROOO");
  });

  it("should display 'RROO' when the time is 2:00", function () {

    const time = "2:00";
    const result = new BerlinClock().oneHourLine(time);

    expect(result).toBe("RROO");
  });

  it("should display 'RRRO' when the time is 3:00", function () {

    const time = "3:00";
    const result = new BerlinClock().oneHourLine(time);

    expect(result).toBe("RRRO");
  });

  it("should display 'RRRR' when the time is 4:00", function () {

    const time = "4:00";
    const result = new BerlinClock().oneHourLine(time);

    expect(result).toBe("RRRR");
  });
});

describe("Five hours block", function () {
  const clock = new BerlinClock();

  it("should return 'OOOO' when given 0:00", function () {
      const time = "0:00";

      const result = clock.fiveHourLine(time);

      expect(result).toBe("OOOO");

  });

  it(" should return 'ROOO' when given 5:00", function () {
    const time = "5:00";

    const result = clock.fiveHourLine(time);

    expect(result).toBe("ROOO");
});

it(" should return 'RROO' when given 10:00", function () {
  const time = "10:00";

  const result = clock.fiveHourLine(time);

  expect(result).toBe("RROO");
});

it("should return 'RRRO' lamps when given 15:00", function () {
  const time = "15:00";

  const result = clock.fiveHourLine(time);

  expect(result).toBe("RRRO");
});
it(" should return 'RRRR' when given 20:00", function () {
  const time = "20:00";

  const result = clock.fiveHourLine(time);

  expect(result).toBe("RRRR");
});

it("should return 'OOOO' when given 1:00", function () {
  const time = "1:00";

  const result = clock.fiveHourLine(time);

  expect(result).toBe("OOOO");
});

it("should return 'RROO' when given 14:00", function () {
  const time = "14:00";

  const result = clock.fiveHourLine(time);

  expect(result).toBe("RROO");
});
});

describe("Seconds lamp", function () {
  it("should return 'R' when the seconds are even", function () {
      const time = "0:00:30";
      const result = new BerlinClock().secondsLamp(time);
      expect(result).toBe("R");
  });
  it("should return 'O' when the seconds are odd", function () {
    const time = "0:00:31";
    const result = new BerlinClock().secondsLamp(time);
    expect(result).toBe("O");
});
});