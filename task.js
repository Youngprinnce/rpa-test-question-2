
const bet1 = ['2-2', '2-0', '0-1', '3-3', '2-1'];
const bet2 = ['2-2', '3-1', '4-1', '0-1', '4-4'];
const bet3 = ['2-1', '1-0', '1-0', '2-3', '0-1'];
const results = ['3-1', '2-0', '2-1', '3-5', '2-7'];

function playerStatus(bet, results) {
    let status = '';
    if (Array.isArray(bet) && Array.isArray(results) && bet.length === results.length) {
        if (results.every((val, index) => val === bet[index])) {
            status = 'Jackpot Winner'
        } else {
            for (let i = 0; i < bet.length; i++) {
                const element1 = bet[i];
                for (let j = 0; j < results.length; j++) {
                    const element2 = results[j];
                    if (element1 !== element2) {
                        let split1 = element1.split('-');
                        let split2 = element2.split('-');
                        console.log(split1)
                        console.log(split2)

                        if ((parseInt(split1[0]) > parseInt(split1[1]) && parseInt(split2[0]) > parseInt(split2[1])) ||
                            (parseInt((split1[1]) > parseInt(split1[0]) && parseInt(split2[1]) > parseInt(split2[0])))
                        ) {
                            status = 'consolation prize winner'
                        } else {
                            status = 'losses all bet'
                        }
                    }
                }
            }
        }
    }
  return status;
}

console.log(playerStatus(bet1, results));
console.log(playerStatus(bet2, results));
console.log(playerStatus(bet3, results));
