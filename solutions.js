// Exercise 1): Find the top navbar, using a query for the HTML element type. The navbar's type is `<nav>`.
document.getElementsByTagName('nav')[0]
// Exercise 2): Find the sidebar on the left by using its id and set it equal to the variable sideBar.
sideBar = document.getElementById('sidebar-left');
// Exercise 3): Find the 'Pages' and 'Groups' sections of the sidebar by using their class.
document.getElementsByClassName('pages')[0];
document.getElementsByClassName('groups')[0];
// Exercise 4): Set the text of the 'Favorites' `h5` to say "Least Favs".
sideBar.getElementsByTagName('h5')[0].innerHTML = "Least Favs";
// Exercise 5): Find the first of the ads in the sidebar and hide it.
document.getElementsByClassName('ad-slot')[0].style.visibility = 'hidden';
// Exercise 6): Set the visibility on the ad that you hid in the previous exercise to make it visible again.
document.getElementsByClassName('ad-slot')[0].style.visibility = 'visible';
// Exercise 7): Use `setAttribute` to change `src` attribute of one of the ads in the sidebar.
document.getElementsByClassName('ad-slot')[0].getElementsByTagName('img')[0].src = "http://placebear.com/200/300"
// Exercise 8): Find Sam's post and change its text to something incredible.
document.getElementsByClassName('media-body')[4].getElementsByTagName('p')[0].innerHTML = 'Hello World!'
// Exercise 9): Find the first post and add the `.post-liked` class to it, and watch it turn blue.
document.getElementsByClassName('inline-list post-actions')[0].classList.add('post-liked')
// Exercise 10: Find the second post and add the `.post-shared` class to the `li` containing the text Share to watch it turn red.
document.getElementsByClassName('inline-list post-actions')[1].getElementsByTagName('li')[2].classList.add('post-shared')
// Exercise 11: On the second post, remove the `.post-shared` class from the `li` containing the text Share.
document.getElementsByClassName('inline-list post-actions')[1].getElementsByTagName('li')[2].classList.remove('post-shared')
