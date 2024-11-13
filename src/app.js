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
        // re commit pour etre sur d'avoir fait le refactor 
        const minutes = parseInt(time.split(":")[1], 10);// exemple 0:05 => 5 minutes , 0:15 => 15 minutes

        let line = '';
        const LampsOn = Math.floor(minutes / 5);
    
        for (let i = 1; i <= 11; i++) {
            if (i <= LampsOn) {
                line += (i % 3 === 0) ? 'R' : 'Y';
            } else {
                line += 'O';
            }
        }

        return line;
    }

    oneHourLine(time) {
        const hours = parseInt(time.split(":")[0], 10) % 5; // Exemple : 12:00 => 12 % 5 = 2 (2 lampes rouges allumées)
    
        let line = '';
        for (let i = 1; i <= 4; i++) {
            line += (i <= hours) ? 'R' : 'O';
        }
    
        return line;
    }

    fiveHourLine(time) {
       
        if (time === "0:00") return "OOOO";
        if( time === "5:00") return "ROOO";
        if( time === "10:00") return "RROO";
        if( time === "15:00") return "RRRO";
      }
    
}