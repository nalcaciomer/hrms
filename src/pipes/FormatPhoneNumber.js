export function getFormattedPhoneNumber(phoneNumber) {
  let formattedPhone = "(";
  phoneNumber.replace(
    /^\D*(\d{0,3})\D*(\d{0,3})\D*(\d{0,4})/,
    function (match, g1, g2, g3) {
      if (g1.length) {
        formattedPhone += g1;
        if (g1.length == 3) {
          formattedPhone += ")";
          if (g2.length) {
            formattedPhone += " " + g2;
            if (g2.length == 3) {
              formattedPhone += " - ";
              if (g3.length) {
                formattedPhone += g3;
              }
            }
          }
        }
      }
    }
  );
  return formattedPhone;
}
