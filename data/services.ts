interface Service {
  name: string;
  code: string;
}

const SERVICES: Service[] = [
  {
    name: "Exterior Detailing",
    code: "exterior_det",
  },
  {
    name: "Interior Detailing",
    code: "interior_det",
  },
  {
    name: "Headlight Polishing",
    code: "headlight_pol",
  },
  {
    name: "Ceramic Coating",
    code: "ceramic_coa",
  },
  {
    name: "Polishing",
    code: "polishing",
  },
];

export { SERVICES };