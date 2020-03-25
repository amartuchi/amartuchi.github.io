            function load() {
                fetch('http://amartuchi-springboot.jelastic.saveincloud.net/hello?name=Arthur')
                        .then(
                                function (response) {
                                    if (response.status !== 200) {
                                        console.log('Looks like there was a problem. Status Code: ' +
                                                response.status);
                                        return;
                                    }
                                    response.json().then(function (data) {
                                        alert(data.text);
                                    });
                                }
                        )
                        .catch(function (err) {
                            console.log('Fetch Error: ', err);
                        });
            }
