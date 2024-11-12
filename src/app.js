export class BerlinClock {

    oneMinuteLine(time) {

      if(time === "0:00") return "aucune lampe allumée";

      return "1ère lampe jaune allumée";
    }
}