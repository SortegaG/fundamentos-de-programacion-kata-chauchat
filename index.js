function chauchat(cargador) {
    let disparos = 0;

    for (let i = 0; i < cargador; i++) {
        let fallo = Math.random();

        if (fallo < 0.8) {
            console.log('pium!');
            disparos++;
            
            if (disparos % 3 === 0) {
                console.log(' ');
        }
        } else {
            console.log('Illo, me he quedao pillá!');
            break;
        }
    }
}
