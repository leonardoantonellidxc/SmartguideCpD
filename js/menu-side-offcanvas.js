document.addEventListener('DOMContentLoaded', (event) => {
    const sidebarContent = document.querySelector('.sidebar-scroll');
    const offcanvasBody = document.querySelector('#sidebarOffcanvas .offcanvas-body');
    const sidebarWrapperTitle = document.querySelector('.sidebar-wrapper .card-header .h6');
    const offcanvasHeaderTitle = document.querySelector('#sidebarTitle');
    const offcanvasHeaderTitleOpen = document.querySelector('.offcanvas-title');
    const sidebarActiveLink = document.querySelector('.sidebar-list.collapse .list-link.active');
    const offcanvasHeaderSubTitle = document.querySelector('#sidebarActiveItem');
    
    if (sidebarContent && offcanvasBody) {
        offcanvasBody.innerHTML = sidebarContent.innerHTML;
    }

    if (sidebarWrapperTitle && offcanvasHeaderTitle && offcanvasHeaderTitleOpen) {
        offcanvasHeaderTitle.innerHTML = sidebarWrapperTitle.innerHTML;
        offcanvasHeaderTitleOpen.innerHTML = sidebarWrapperTitle.innerHTML;
    }

    if (sidebarActiveLink && offcanvasHeaderSubTitle) {
        offcanvasHeaderSubTitle.innerHTML = sidebarActiveLink.innerHTML;
    }

    // Gestione della chiusura dell'offcanvas e rimozione della backdrop
    const offcanvasElement = document.getElementById('sidebarOffcanvas');
    const bsOffcanvas = new bootstrap.Offcanvas(offcanvasElement);

    offcanvasElement.addEventListener('hidden.bs.offcanvas', function () {
        const backdrop = document.querySelector('.offcanvas-backdrop');
        if (backdrop) {
            backdrop.remove();
        }
    });

    // Chiudi l'offcanvas quando si clicca fuori
    document.addEventListener('click', function (event) {
        const isClickInsideOffcanvas = offcanvasElement.contains(event.target);
        const isClickOnToggleButton = event.target.closest('[data-bs-toggle="offcanvas"]');

        if (!isClickInsideOffcanvas && !isClickOnToggleButton && bsOffcanvas._isShown) {
            bsOffcanvas.hide();
        }
    });
});
