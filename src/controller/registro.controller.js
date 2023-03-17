async function showRegister (req,res) {
    res.render('registro', {});
}

async function failRegister (req,res) {
    console.log('failed Strategy')
    res.send({error: 'Failed Strategy'})
}

export {showRegister, failRegister}