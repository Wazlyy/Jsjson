fetch('info.json')
    .then(response => response.json())
    .then(data => {
        var k;
        for (k = 0; k < data.length; k++) {
            var kDiv = document.createElement('div');
            kDiv.setAttribute("class","test");
            kDiv.id = ('id' + k);
            document.getElementById('body').appendChild(kDiv);
            document.getElementById('id' + k).innerHTML = 
            '<br>Prenom : ' + data[k].name + 
            '<br>Pseudo : ' + data[k].nickname + 
            '<br>Xp : ' + data[k].xp +
            ('<br><img src="' + data[k].avatarurl + '"/><br>');
        }
    });