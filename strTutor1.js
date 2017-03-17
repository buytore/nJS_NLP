/**
 * Created by markbannan on 3/17/2017.
 */

var strUsers = 'rpulley:  ,    jsmith, svai,  jsatriani    ,ymalmsteen    ';
var arrUsers = strUsers.split(',');

for (i in arrUsers) {
    var user = arrUsers[i];

    var trimUser = user.trim();

    var firstInitial = trimUser.substring(0, 1);
    var lastInitial = trimUser.substring(1, 2);
    var lastName = trimUser.substring(1);
    var index = trimUser.indexOf(":");

    console.log('User: \'' + user + '\'');
    console.log('Trim: \'' + trimUser + '\'');

    console.log('First Initial: ' + firstInitial.toUpperCase());
    console.log('Last Initial: ' + lastInitial.toUpperCase());
    console.log('Last Name: ' + lastName);
    console.log('Index of Last Name: ' + index);

}