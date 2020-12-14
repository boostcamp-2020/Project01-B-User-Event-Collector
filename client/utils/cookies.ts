export const getCookie = (key) => {        
    const value = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)'); 
    return value? value[2] : null;
}