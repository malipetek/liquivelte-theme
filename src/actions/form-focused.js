export default function (node, options) {
    node.addEventListener('click', e => {
        node.focus();
    })
    node.addEventListener('focus', e => {
        document.body.dispatchEvent(new CustomEvent('shopify:product-form-focus', { detail: options }))
    })
    return {
        destroyed() {
            node.removeEventListener('focus');
        },
    }
}