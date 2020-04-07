export function formatNumber (number) {
    const formattedNumber = Number.parseFloat(number).toFixed(2);
    const integerPart = Number.parseInt(formattedNumber);
    const hasDigits = (number - integerPart) > 0;

    return hasDigits ? formattedNumber : integerPart;
}
