function toggleRetreatWidget() {
    const widget = document.getElementById('retreatWidget');
    const popover = document.getElementById('retreatPopover');
    const fab = widget.querySelector('.retreat-fab');
    const fabIcon = fab.querySelector('.fab-icon');
    const closeIcon = fab.querySelector('.close-icon');
    const badge = fab.querySelector('.fab-badge');

    widget.classList.toggle('active');

    if (widget.classList.contains('active')) {
        fabIcon.style.display = 'none';
        closeIcon.style.display = 'block';
        badge.style.display = 'none';
    } else {
        fabIcon.style.display = 'block';
        closeIcon.style.display = 'none';
        badge.style.display = 'flex';
    }
}
