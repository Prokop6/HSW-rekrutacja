export function alertOnce(alertText) {
    var alerted = localStorage.getItem('alerted') || '';
    if (alerted != 'yes') {
        alert(`${alertText}`);
        localStorage.setItem('alerted', 'yes');
    }
}
;
