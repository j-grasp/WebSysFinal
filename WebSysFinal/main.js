function toggleTheme() {
    var theme = document.getElementsByTagName('link')[0];
    if (theme.getAttribute('href') == 'main.css') {
        theme.setAttribute('href', 'alternate.css');
    } else {
        theme.setAttribute('href', 'main.css');
    }
}