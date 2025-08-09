const EMAIL_PARAMS = {
  EMAIL: "email",
  MESSAGE: "message",
  NAME: "name",
};

interface IEmailRequestParams {
  from: string;
  to: string;
  name: string;
  message: string;
}

export { EMAIL_PARAMS };
export type { IEmailRequestParams };
