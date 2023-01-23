import React from 'react';
import { useRouter } from 'next/router';
import { z } from 'zod';
import { useZorm } from 'react-zorm';
import axios from 'axios';

import { SERVICES } from '../../data/services';
import { CONTACT_CHANNELS } from '../../data/contactChannel';
import { bodyText } from '../../utils/prepareEmail';

import {
  TextInput,
  Checkbox,
  Select,
  TextArea
} from '../../components/Form/Elements';

function currentDate() {
  const d = new Date();

  const day = d.toLocaleString(undefined, { day: "2-digit" });
  const month = d.toLocaleString(undefined, { month: "2-digit" });
  const year = d.toLocaleString(undefined, { year: "numeric" });

  return `${year}-${month}-${day}`;
}

const booleanCheckbox = () => z
  .string()
  .optional()
  .transform(Boolean);

const arrayCheckbox = () => z
  .array(z.string().nullish())
  .nullish()
  .transform((a) => (a ?? []).flatMap((item) => (item ? item : [])));

const FormSchema = z.object({
  services: arrayCheckbox().refine(
    (services) => {
      return services.length > 0;
    },
    {
      message: "Select at least 1 service."
    }
  ),
  contactChannels: arrayCheckbox().refine(
    (channels) => {
      return channels.length > 0;
    },
    {
      message: "Select at least 1 channel of contact."
    }
  ),
  car_make: z.string().min(1),
  car_model: z.string().min(1),
  car_manufacture_year: z.string(),
  car_color: z.string().min(1),
  first_name: z.string().min(1),
  last_name: z.string().min(1).optional(),
  email: z.string().email(),
  phone_number: z.string().min(1),
  hear_about_us: z.string().optional(),
  booking_date: z.string().min(1),
  brief_message: z.string().optional(),
});

type FormErrorMessageProps = {
  message: string,
};

function FormErrorMessage({ message }: FormErrorMessageProps) {
  return (
    <div className="
      text-sm
      text-red-600
      p-2 mt-1 mb-3
      bg-gray-100
    ">
      {`${message}`}
    </div>
  );
}


function Contact() {
  const router = useRouter();

  type status = -1 | 0 | 1;

  const [submitClicked, setSubmitClicked] = React.useState<Boolean>(false);
  const [submitStatus, setSubmitStatus] = React.useState<status>(0);


  const zo = useZorm("contactForm", FormSchema, {
    onValidSubmit(e) {
      e.preventDefault();
      setSubmitStatus(0);
      const payload = {
        name: `${e.data.first_name} ${e.data?.last_name ?? ""}`,
        message: bodyText(e.data)
      }
      axios.post(
        './api/email',
        payload,
        {
          headers: { 'Content-Type': 'application/json' }
        }
      ).then(() => {
        setSubmitStatus(1);
        //setMessage(data);
      }).catch((e) => {
        console.log("email submit error:", e)
        setSubmitStatus(-1);
        //setMessage(data);
      });
    }
  });


  const onSubmit = () => {
    setSubmitClicked(true);
  };

  const goToHome = () => {
    router.push('/');
  }

  React.useEffect(() => {
    if (zo.validation?.success === true) {
      setSubmitClicked(false);
    }
  }, [zo.validation?.success]);

  return (
    <div>
      <form ref={zo.ref} name="contactForm">
        <div className="
      flex flex-col
      m-5 md:m-20
      w-fit
    ">
          <div className="
        font-bold
        text-xl
        tracking-wide
        mb-10
      ">
            Which services are you interested in?
            <div className="
            border-2 border-slate-300
            shadow-md
            rounded
            p-4
            ml-10 mt-3
          ">
              {SERVICES.map((service, index) => {
                return (
                  <Checkbox
                    id={zo.fields.services(index)("id")}
                    name={zo.fields.services(index)("name")}
                    text={service.name}
                    value={service.code}
                  />
                );
              })}

              {zo.errors.services((e) => (
                <FormErrorMessage message={e.message} />
              ))}
            </div>
          </div>

          <div className="
        font-bold
        text-xl
        tracking-wide
        mb-10
      ">
            Tell us about your car!
            <div className="
            border-2 border-slate-300
            shadow-md
            rounded
            p-4
            ml-10 mt-3
          ">
              <div>
                <TextInput
                  text="What is the make of your car?"
                  placeholder="Car Make"
                  id="car_make"
                  name={zo.fields.car_make()}
                />
                {
                  zo.errors.car_make(() => (
                    <FormErrorMessage message={"Please enter car make."} />
                  ))
                }
              </div>
              <div>
                <TextInput
                  text="What is the model of your car?"
                  placeholder="Car Model"
                  id="car_model"
                  name={zo.fields.car_model()}
                />
                {
                  zo.errors.car_model(() => (
                    <FormErrorMessage message={"Please enter car model."} />
                  ))
                }
              </div>
              <TextInput
                text="What is the manufacturing year of your car?"
                placeholder="Manufacture Year"
                id="car_manufacture_year"
                name={zo.fields.car_manufacture_year()}
              />
              <div>
                <TextInput
                  text="What is the color of your car?"
                  placeholder="Car Color"
                  id="car_color"
                  name={zo.fields.car_color()}
                />
                {
                  zo.errors.car_color(() => (
                    <FormErrorMessage message={"Please enter the color of your car."} />
                  ))
                }
              </div>
            </div>

          </div>

          <div className="
        font-bold
        text-xl
        tracking-wide
        mb-10
      ">
            How can we contact you?
            <div className="
            border-2 border-slate-300
            shadow-md
            rounded
            p-4
            ml-10 mt-3
          ">
              <div className="
              grid grid-flow-row grid-cols-2 gap-2
            ">
                <div className="col-span-2 md:col-span-1">
                  <TextInput
                    text="First Name"
                    placeholder="First Name"
                    id="first_name"
                    name={zo.fields.first_name()}
                  />
                  {
                    zo.errors.first_name(() => (
                      <FormErrorMessage message={"Please enter your name."} />
                    ))
                  }
                </div>
                <div className="col-span-2 md:col-span-1">
                  <TextInput
                    text="Last Name"
                    placeholder="Last Name"
                    id="last_name"
                    name={zo.fields.last_name()}
                  />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <TextInput
                    text="Email Address"
                    placeholder="Email"
                    id="email"
                    name={zo.fields.email()}
                  />
                  {
                    zo.errors.email(() => (
                      <FormErrorMessage message={"Please enter a valid email."} />
                    ))
                  }

                </div>
                <div className="col-span-2 md:col-span-1">
                  <TextInput
                    text="Phone Number"
                    placeholder="Phone Number"
                    id="phone_number"
                    name={zo.fields.phone_number()}
                  />
                  {
                    zo.errors.phone_number(() => (
                      <FormErrorMessage message={"Please enter your phone number."} />
                    ))
                  }
                </div>
                <div className="col-span-2">
                  <Select
                    id="hear_about_us"
                    name={zo.fields.hear_about_us()}
                    text="Where did you hear about us?"
                    placeholder="You heard about us from..."
                  >
                    <option value="Google - Web Search">Google / Web Search</option>
                    <option value="Referral">Referral</option>
                    <option value="Existing Client">Existing Client</option>
                    <option value="Social Media">Social Media</option>
                  </Select>
                </div>
              </div>

              <div>
                <div className="
              font-bold text-sm
              mt-3 mb-2
            ">
                  How do you want us to contact you?
                </div>
                <div>
                  {CONTACT_CHANNELS.map((cc, index) => {
                    return (
                      <Checkbox
                        text={cc.name}
                        id={zo.fields.contactChannels(index)("id")}
                        name={zo.fields.contactChannels(index)("name")}
                        value={cc.code}
                      />
                    )
                  })}
                </div>
                {
                  zo.errors.contactChannels((e) => (
                    <FormErrorMessage message={e.message} />
                  ))}
              </div>

              <div>
                <div className="
              font-bold text-sm
              mt-3 mb-2
            ">
                  <label htmlFor="booking_date">
                    When would you like to bring your vehicle in?
                  </label>
                </div>
                <input
                  type="date"
                  min={currentDate()}
                  id="booking_date"
                  name={zo.fields.booking_date()}
                  className="border-2 border-neutral-300 rounded-md p-2 text-base"
                />
                {
                  zo.errors.booking_date(() => (
                    <FormErrorMessage message={"Please book a date."} />
                  ))
                }
              </div>
              <div className="mt-3">
                <TextArea
                  text="Brief Message"
                  name={zo.fields.brief_message()}
                  id="brief_message"
                  placeholder="If you have a message for us, write it here!"
                />
              </div>

            </div>
          </div>

          <div className="place-self-center mb-3 ml-10">
            {zo.validation?.success === false && submitClicked
              ? <div className="alert alert-warning shadow-lg">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  <span>
                    There are some problems with the data entered in the form. Please recheck.
                  </span>
                </div>
              </div>
              : null
            }
            {
              submitStatus === -1 && submitClicked && zo.validation?.success === true
                ? <div className="alert alert-warning shadow-lg">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    <span>
                      Your request cannot be submitted. Please try again!
                    </span>
                  </div>
                </div>
                : null
            }
            {
              submitStatus === 0 && submitClicked && zo.validation?.success === true
                ? <div className="alert alert-info shadow-lg">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>Please wait while your request is being submitted.</span>
                  </div>
                </div>
                : null
            }
            {
              submitStatus === 1 && submitClicked && zo.validation?.success === true
                ? <div className="alert alert-success shadow-lg">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Your request is submitted succesfully! We will get back to you shortly.</span>
                  </div>
                </div>
                : null
            }
          </div>

          <div className="place-self-center ml-10">
            {submitStatus === 1
              ?
              <button
                className="btn btn-primary btn-wide"
                onClick={goToHome}
              >
                Go To Home Page!
              </button>
              : <button
                className="btn btn-primary btn-wide"
                type="submit"
                onClick={onSubmit}
              >
                submit
              </button>
            }
          </div>



        </div>

      </form>
    </div>
  );
}

export default Contact;