/* Position-Aware Button Hover Effect
   Tracks mouse entry/exit point and positions the fill circle accordingly */
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.btn-pa').forEach(function (btn) {
        var fill = btn.querySelector('.btn-pa-fill');
        if (!fill) return;

        btn.addEventListener('mouseenter', function (e) {
            var rect = btn.getBoundingClientRect();
            fill.style.left = (e.clientX - rect.left) + 'px';
            fill.style.top = (e.clientY - rect.top) + 'px';
        });

        btn.addEventListener('mouseleave', function (e) {
            var rect = btn.getBoundingClientRect();
            fill.style.left = (e.clientX - rect.left) + 'px';
            fill.style.top = (e.clientY - rect.top) + 'px';
        });
    });
});
