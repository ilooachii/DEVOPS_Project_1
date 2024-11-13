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
        const hours = parseInt(time.split(":")[0]) % 5;
    
        if (hours === 0) return "OOOO";
        if (hours === 1) return "ROOO";
        if (hours === 2) return "RROO";
        if (hours === 3) return "RRRO";
    }
    
}