var host = 'http://nik.freeun.ru';
var user_data = {
    id: null,
    access_token: null,
    data: null
};


function auth() {
    $.ajax({
        type: 'POST',
        url: host + '/login',
        dataType: 'json',
        data: $('#rs_login').serialize(),
        success: function (msg) {
            user_data.data = $('#rs_login').serialize();
            user_data.access_token = msg.result.access_token;
            user_data.id = msg.result.id;
            is_user = true;
            document.getElementById('rs_login_form').style.display = 'none';
            document.getElementById('records_table').style.display = 'block';
            document.getElementById('messageBox').style.visibility = 'visible';
            document.body.style.background = '#fff';
        }
    });
}

function reg() {
    $.ajax({
        type: 'POST',
        url: host + '/reg',
        dataType: 'json',
        data: $('#rs_reg').serialize(),
        success: function (msg) {
            user_data.data = $('#rs_reg').serialize();
            user_data.access_token = msg.result.access_token;
            user_data.id = msg.result.id;
            is_user = true;
            document.getElementById('rs_login_form').style.display = 'none';
            document.getElementById('records_table').style.display = 'block';
            document.getElementById('messageBox').style.visibility = 'visible';
            document.body.style.background = '#fff';
        }
    });
}
