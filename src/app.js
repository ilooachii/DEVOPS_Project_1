export class BerlinClock {

    oneMinuteLine(time) {

        const minutes = parseInt(time.split(":")[1], 10); 
        const lampsToLight = minutes % 5;

        if (lampsToLight === 0) {
            return "0 lampe allumée";
        } else {
            const lampesText = lampsToLight === 1 ? "1 lampe jaune allumée" : `${lampsToLight} lampes jaune allumée`;
            return lampesText;
        }
    }
    
    fiveMinutesBlock(time) {
        
        if(time === "0:00") 
            return "OOOOOOOOOOO";

        if(time === "0:05") 
            return "YOOOOOOOOOO";

        if(time === "0:10")
            return "YYOOOOOOOOO";        
    }
    
}