export class BerlinClock {

    oneMinuteLine(time) {

      if(time === "0:00") return "aucune lampe allumée";

      if (time === "0:01") return "1ère lampe jaune allumée";

      if(time === "0:02")  return "deux lampes jaune allumée";

      if (time == "0:03") return "trois lampes jaune allumée";
    }
    
}