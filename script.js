document.addEventListener('DOMContentLoaded', function () {
    const albums = document.querySelectorAll('.album');
    const albumInfo = document.getElementById('album-info');

    albums.forEach((album, index) => {
        album.setAttribute('tabindex', index + 1);

        album.addEventListener('mouseover', function () {
            albumInfo.textContent = album.getAttribute('data-info');
            albumInfo.style.visibility = 'visible';
        });

        album.addEventListener('mouseout', function () {
            albumInfo.textContent = 'Hover or focus on an image to see details!';
            albumInfo.style.visibility = 'hidden';
        });

        album.addEventListener('focus', function () {
            albumInfo.textContent = album.getAttribute('data-info');
            albumInfo.style.visibility = 'visible';
        });

        album.addEventListener('blur', function () {
            albumInfo.textContent = 'Hover or focus on an image to see details!';
            albumInfo.style.visibility = 'hidden';
        });
    });

    console.log('Page loaded and DOM fully initialized');
});
