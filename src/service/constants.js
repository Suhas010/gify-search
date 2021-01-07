export const HTTP_STATUS_CODE = {
  400: {
    title: "Bad Request",
    desc: "The server did not understand the request.",
  },
  401: {
    title: "Unauthorized",
    desc: "The requested page needs a username and a password.",
  },
  402: {
    title: "Payment Required",
    desc: "You can not use this code yet.",
  },
  403: {
    title: "Forbidden",
    desc: "Access is forbidden to the requested page.",
  },
  404: {
    title: "Not Found",
    desc: "The server can not find the requested page.",
  },
  405: {
    title: "Method Not Allowed",
    desc: "The method specified in the request is not allowed.",
  },
  406: {
    title: "Not Acceptable",
    desc:
      "The server can only generate a response that is not accepted by the client.",
  },
  407: {
    title: "Proxy Authentication Required",
    desc:
      "You must authenticate with a proxy server before this request can be served.",
  },
  408: {
    title: "Request Timeout",
    desc: "The request took longer than the server was prepared to wait.",
  },
  413: {
    title: "Request Entity Too Large",
    desc:
      "The server will not accept the request, because the request entity is too large.",
  },
  414: {
    title: "Request-url TooLong",
    desc:
      'The server will not accept the request, because the url is too long. Occurs when you convert a "post" request to a "get" request with a long query information .',
  },
  415: {
    title: "Unsupported Media Type",
    desc:
      "The server will not accept the request, because the mediatype is not supported .",
  },
  416: {
    title: "Requested Range Not Satisfiable",
    desc: "The requested byte range is not available and is out of bounds.",
  },
  417: {
    title: "Expectation Failed",
    desc:
      "The expectation given in an Expect request-header field could not be met by this server.",
  },
  422: {
    title: "Unprocessable Entity",
    desc: "The client should not repeat this request without modification.",
  },
  500: {
    title: "Internal Server Error",
    desc:
      "The request was not completed. The server met an unexpected condition.",
  },
  501: {
    title: "Not Implemented",
    desc:
      "The request was not completed. The server did not support the functionality required.",
  },
  502: {
    title: "Bad Gateway",
    desc:
      "The request was not completed. The server received an invalid response from the upstream server.",
  },
  503: {
    title: "Service Unavailable",
    desc:
      "The request was not completed. The server is temporarily overloading or down.",
  },
  504: {
    title: "Gateway Timeout",
    desc: "The gateway has timed out.",
  },
  505: {
    title: "HTTP Version Not Supported",
    desc: 'The server does not support the "http protocol" version.',
  },
};
