function switchPage(index) {
    const pages = document.querySelectorAll('.page-container');
    const buttons = document.querySelectorAll('.nav-btn');

    pages.forEach((page, idx) => {
        page.classList.remove('active', 'previous');
        if (idx === index) {
            page.classList.add('active');
        } else if (idx < index) {
            page.classList.add('previous');
        }
    });

    buttons.forEach((btn, idx) => {
        btn.classList.remove('active');
        if (idx === index) btn.classList.add('active');
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
}
