export default function swipe(node, p = {}) {
    let params = p;

    // document.addEventListener('mousemove', move);
    // document.addEventListener('touchmove', move);

    node.addEventListener('mouseup', stopMove);
    node.addEventListener('touchend', stopMove);
    
	node.addEventListener('mousedown', startMove);
	node.addEventListener('touchstart', startMove);

    let x = 0;
    let y = 0;

    function startMove(event) {
        x = event.changedTouches ? event.changedTouches[0].clientX : event.clientX;
        y = event.changedTouches ? event.changedTouches[0].clientY : event.clientY;

		node.dispatchEvent(new CustomEvent('swipeStart', {
			detail: { x, y }
		}));
        // console.log('start move');
		window.addEventListener('mousemove', move);
		window.addEventListener('mouseup', stopMove);
		window.addEventListener('touchmove', move);
		window.addEventListener('touchend', stopMove);
    }
    function move(event) {
        // console.log('startmove');
        const dx = (event.changedTouches ? event.changedTouches[0].clientX : event.clientX) - x;
        const dy = (event.changedTouches ? event.changedTouches[0].clientY : event.clientY) - y;

		x = event.changedTouches ? event.changedTouches[0].clientX : event.clientX;
		y = event.changedTouches ? event.changedTouches[0].clientY : event.clientY;

		node.dispatchEvent(new CustomEvent('swipe', {
			detail: { x, y, dx, dy }
		}));
    }
    function stopMove(event) {
        // console.log('stopmove');
        x = event.changedTouches ? event.changedTouches[0].clientX : event.clientX;
        y = event.changedTouches ? event.changedTouches[0].clientY : event.clientY;

        node.dispatchEvent(new CustomEvent('swipeEnd', {
			detail: { x, y }
		}));
        window.removeEventListener('mousemove', move);
		window.removeEventListener('mouseup', stopMove);
		window.removeEventListener('touchmove', move);
		window.removeEventListener('touchend', stopMove);

    }
    return {
        update(p) {
            params = p;
        },
        destroy() {
            document.removeEventListener('mousemove', move);
            document.removeEventListener('touchmove', move);
            document.removeEventListener('lostpointercapture', stopMove);
            document.removeEventListener('touchcancel', stopMove);
        }
    }
}