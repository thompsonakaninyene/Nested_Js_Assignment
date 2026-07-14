for (let index = 1; index <= 50; index++) {
   
    if (isPrime(index)) {
        console.log(index)
    }

function isPrime(p) {
    if (p < 2) 
        return false;
        if (p === 2) 
            return true;
            if (p % 2 === 0) 
                return false;
            for (let index = 3; index < Math.sqrt(p); index+= 2) {
                if (p % index === 0) 
                    return false; 
            }
            return true;
        }
        




}