async function githubCallback (req,res) {
    req.session.user = req.user;   
    res.redirect('/api/login/products');
}

export {githubCallback}