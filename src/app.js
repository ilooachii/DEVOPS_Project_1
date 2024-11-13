export class BerlinClock {

    oneMinuteLine(time) {

        const minutes = parseInt(time.split(":")[1], 10); 
        const lampsToLight = minutes % 5;

        if (lampsToLight === 0) {
            return "OOOO";
        } else {
            const lampesText = lampsToLight === 1 ? "YOOO" : "Y".repeat(lampsToLight) + "O".repeat(4 - lampsToLight);
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
       
    const hours = parseInt(time.split(":")[0], 10); // Extraire les heures de l'entrée "hh:mm"
    const numberOfLamps = Math.floor(hours / 5); // Calculer combien de blocs de 5 heures

    return "R".repeat(numberOfLamps) + "O".repeat(4 - numberOfLamps); // Remplir avec "R" et "O"
     
    }

    secondsLamp(time) {
        const seconds = parseInt(time.split(":")[2], 10);
        return seconds % 2 === 0 ? "R" : "O"; // "R" pour rouge (allumé), "O" pour éteint
    }
    
}