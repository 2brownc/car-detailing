interface ContactChannel {
  name: string;
  code: string;
}

const CONTACT_CHANNELS: ContactChannel[] = [
  {
    name: "Phone Call",
    code: "phone_cc",
  },
  {
    name: "Text",
    code: "text_cc",
  },
  {
    name: "Email",
    code: "email_cc",
  },
];

export { CONTACT_CHANNELS };