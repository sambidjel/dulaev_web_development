import {
    HttpHeaderTypes,
    HttpMethods
} from 'common.interfaces';

// Implemetation of intefaces
const HTTP_METHODS: HttpMethods = {
GET    : 'Get',
POST   : 'Post',
PUT    : 'Put',
PATCH  : 'Patch',
DELETE : 'Delete',
OPTIONS: 'Options',
HEAD   : 'Head'
};
// Implemetation of intefaces
const HTTP_HEADERS: HttpHeaderTypes = {
ANONYMOUS    : 'anonymous',
LOGIN        : 'login',
AUTHORIZED   : 'authorized',
CUSTOM       : 'custom',
REGISTRATION : 'registration'
};

// now export the configuration
export const API_SERVICES_CONFIG: any = {
    baseUrl: 'http://localhost:3000/api/',
    AuthService: {
        registration: {
            url    : 'temporaryclients/insertorupdatetemporaryclient',
            method : HTTP_METHODS.POST,
            headers: HTTP_HEADERS.LOGIN,
            body   : {}
        },
        login: {
            url    : 'temporaryclients/insertorupdatetemporaryclient',
            method : HTTP_METHODS.POST,
            headers: HTTP_HEADERS.LOGIN,
            body   : {}
        },
        sendOtp : {
            url    : 'temporaryclients/checkotppassword',
            method : HTTP_METHODS.POST,
            headers: HTTP_HEADERS.LOGIN,
            body   : {}
        },
        requestOtp : {
            url    : 'auth/mfa',
            method : HTTP_METHODS.GET,
            headers: HTTP_HEADERS.AUTHORIZED,
            body   : {}
        },
        logout: {
            url    : 'logout',
            method : HTTP_METHODS.POST,
            headers: HTTP_HEADERS.AUTHORIZED,
            search  : { action: 'logout' },
            body   : { user  : 'test'   }
        }
    },
    PosRequestService: {
        findMerchant: {
                url    : 'private/merchants',
                method : HTTP_METHODS.GET,
                headers: HTTP_HEADERS.AUTHORIZED
            },
        findAccounts: {
                url    : 'private/accounts',
                method : HTTP_METHODS.GET,
                headers: HTTP_HEADERS.AUTHORIZED
            },
        sendMerchantMobile: {
                url    : 'private/auth/send_otp',
                method : HTTP_METHODS.POST,
                headers: HTTP_HEADERS.AUTHORIZED,
        body   : { serviceType: 'POS' }
            },
        validateOtp: {
                url    : 'private/auth/validate_otp',
                method : HTTP_METHODS.POST,
                headers: HTTP_HEADERS.AUTHORIZED,
        body   : { serviceType: 'POS' }
            },
        submitPosRequest: {
                url    : 'private/posrequests',
                method : HTTP_METHODS.POST,
                headers: HTTP_HEADERS.AUTHORIZED
            }
    },
    SearchInquiryService: {
        search: {
            url    : 'private/inquiries',
            method : HTTP_METHODS.GET,
            headers: HTTP_HEADERS.AUTHORIZED},
        inquirydetail: {
            url    : 'private/inquiries/detail',
            method : HTTP_METHODS.GET,
            headers: HTTP_HEADERS.AUTHORIZED
        }
    }
};
