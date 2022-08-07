/**
 * Is value numeric
 * 
 * Determine whether variable is a number
 * 
 * @param {*} str 
 *
  import { isNumeric } from '../helpers/general'

  isNumeric(value)
*/
function isNumeric(str) {
  if (['string', 'number'].indexOf(typeof str) === -1) return false; // we only process strings and numbers!
  return (
    !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    !isNaN(parseFloat(str))
  ); // ...and ensure strings of whitespace fail
}

/**
 * Validate email format
 * 
 * Checks the provided email address and validates its format
 * 
 * @param   {String} email  The email address
 * 
    import { validateEmail } from '../helpers/general'

    validateEmail(email)
 */
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Validate strong password format
 * 
 * 
 * @param   {String} password  The password
 * 
    import { validateStrongPassword } from '../helpers/general'

    validateStrongPassword(email)
 */
function validateStrongPassword(password) {
  return /(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(password);
}

/**
 * Checks for empty string
 * 
 * @param   {String} email  input
 * 
    import { isEmpty } from '../helpers/general'

    isEmpty(email)
 */
function isEmpty(input) {
  if (input === '' || input === null || input === undefined) return true;
}

/**
 * Checks if user is authenticated
 * 
 * 
 * 
    import { isAuth } from '../helpers/general'

    isAuth()
 */
function isAuth() {
  const isBrowser = typeof window !== 'undefined';
  if (isBrowser) {
    if (window === undefined || !window) {
      return;
    }

    const token = window.localStorage.getItem('key');
    if (token) return true;
    else return false;
  } else {
    return true;
  }
}

const data = {
  affiliateQueryString: `?_encoding=UTF8&pd_rd_w=jJWO1&content-id=amzn1.sym.5fe95cd4-8512-42fa-bf21-63d83b898785&pf_rd_p=5fe95cd4-8512-42fa-bf21-63d83b898785&pf_rd_r=SAFQKW4M98VX4156822M&pd_rd_wg=J9il9&pd_rd_r=9e6f571a-1468-4461-b4ac-cee3a867f359&linkCode=sl1&tag=tikbookboom-20&linkId=9b743f0f5db8348c9d487efbb1de62f0&language=en_US&ref_=as_li_ss_tl`,
};

export function createAmazonURL(sku) {
  const affiliate = `?_encoding=UTF8&pd_rd_w=HHXPv&content-id=amzn1.sym.f199fff6-bb11-46be-9082-1c8e5ac00895&pf_rd_p=f199fff6-bb11-46be-9082-1c8e5ac00895&pf_rd_r=4D5E23EC8NFK2Z3GK14R&pd_rd_wg=7J51W&pd_rd_r=b2a18d5b-8342-4a05-a8e2-4fb440fbee67&linkCode=sl1&tag=tikbookboom-20&linkId=0107fa2a7ea91f891fa39967cf3b571f&language=en_US&ref_=as_li_ss_tl`;
  const url = `https://amazon.com/dp/${sku}${affiliate}`;
  return url;
}

export {
  isNumeric,
  validateEmail,
  validateStrongPassword,
  isEmpty,
  isAuth,
  data,
};
