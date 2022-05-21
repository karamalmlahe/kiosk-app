//reduce Text Size
export const reduceTextSize = (text, size) => {
    if (text.length > size) {
        return text.substring(0, size) + '...';
    }
    return text;
}
//money formatting
import Intl from "intl";
import 'intl/locale-data/jsonp/en';
export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'ILS',

});