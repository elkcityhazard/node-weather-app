exports.genericError = (req, res, next) => {
    res.status(404).render('./errors/genError', {
        title: 'General 404 Error',
        msg: 'Sorry, this is a general 404 error.  Page Not Found.  Try again',
        name: 'Andrew McCall',
    });
}


exports.helpError = (req, res, next) => {
    res.status(404).render('./errors/genError', {
        title: 'Help Page 404 Error',
        msg: 'Sorry, the help article you were looking for can not be found.  Please go back and try again',
        name: 'Andrew McCall',
    })
}