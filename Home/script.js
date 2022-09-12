let fetchRes = fetch(
"https://scratchdb.lefty.one/v3/user/info/AwesomeYoungCoder");
        fetchRes.then(res =>
            res.json()).then(d => {
                console.log(d)
            })
