//creating the server
const express = require('express');
const app = express();

port = process.env.PORT || 3000;
app.set('port', port);

app.listen(app.get('port'), () => {
        console.log('Ope Oh!!! Express don start oh! and e don start on PORT:' +
            app.get('port') + ' oya! you fit use any key kill am'
        );
    }
);



    