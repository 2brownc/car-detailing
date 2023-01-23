function getServices(serviceArray: string[]) {
  let services = serviceArray.join(', ');

  const references = [
    ['exterior_det', 'Exterior Detailing'],
    ['interior_det', 'Interior Detailing'],
    ['headlight_pol', 'Headlight Polishing'],
    ['ceramic_coa', 'Ceramic Coating'],
    ['polishing', 'Polishing']
  ];

  for (const item of references) {
    services = services.replace(item[0], item[1]);
  }

  return services;
}

function getContactChannels(channelsArray: string[]) {
  let contactChannels = channelsArray.join(', ');

  const reference = [
    ['phone_cc', 'Phone'],
    ['email_cc', 'Email'],
    ['text_cc', 'Text'],
  ];

  for (const item of reference) {
    contactChannels = contactChannels.replace(item[0], item[1]);
  }

  return contactChannels;
}

function bodyText(fd: any) {
  return `
    CUSTOMER NAME: ${fd.first_name} ${fd?.last_name ?? ""}
    PHONE NO: ${fd.phone_number}
    EMAIL: ${fd.email}
    CONTACT THROUGH: ${getContactChannels(fd.contactChannels)}
    
    SERVICES REQUESTED: ${getServices(fd.services)}
    CAR MAKE: ${fd.car_make}
    CAR MODEL: ${fd.car_model}
    CAR YEAR: ${fd?.car_manufacture_year ?? ""}
    CAR COLOR: ${fd.car_color}
    BOOKING DATE: ${fd.booking_date}
    
    MESSAGE FROM CUSTOMER: ${fd?.brief_message ?? ""}
  `;
}

export { bodyText };