"use client"; // This is a client component 👈🏽

import { Dialog, Transition } from "@headlessui/react";
import {Fragment, useRef, useState} from "react";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import axios from "axios";

type MyComponentProps = {
  buttonText: string;
};

const Register: React.FC<MyComponentProps> = (props) => {
  let [isOpen, setIsOpen] = useState(true);
  let completeButtonRef = useRef(null);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        referral:"",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendToSlack = () => {
    // You should replace this URL with your Slack API endpoint.
    const slackWebhookUrl = "https://hooks.slack.com/services/"; // Replace with your Slack Webhook URL

    const code1 = "T06359UTPK7";
    const code2 = "/B064J1JSS3F/";
    const code3 = "bcldAB6qy2NlimO6HOTOBSeI";

    // Compose the message payload
    const messagePayload = {
      "text": `Saral School  \nRequest for ${props.buttonText} (${window.location.pathname}) : \n${JSON.stringify(formData)}`,
    };


    axios.post(slackWebhookUrl + code1 + code2 + code3, JSON.stringify(messagePayload)).then(response => {
          console.log("Message sent to Slack:", response.data);
          closeModal()
        })
        .catch((error) => {
          console.error("Error sending message to Slack:", error);
        });
  };

  return (
    <>
      <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto">
        <button
          className="text-Blueviolet text-lg font-medium ml-9 py-5 px-16 transition duration-150 ease-in-out rounded-full bg-semiblueviolet hover:text-white hover:bg-Blueviolet"
          onClick={openModal}
        >
          {props.buttonText}
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}
      initialFocus={completeButtonRef}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex items-start justify-between rounded-t">
                  <button type="button"
                          className="text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                          data-modal-hide="default-modal"
                  onClick={closeModal}>
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 14 14">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                  </div>
                  <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="w-full max-w-md space-y-8">
                      <div>
                        <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-gray-900">
                          Redeem your first free career counselling
                        </h2>
                        <img
                          className="mx-auto h-12 w-auto"
                          width={100}
                          height={100}
                          style={{ width: "45%", height: "100%" }}
                          src="/assets/logo/logo.png"
                          alt="Saral Group"
                        />
                      </div>
                        <input
                          type="hidden"
                          name="remember"
                          defaultValue="true"
                        />
                        <div className="-space-y-px rounded-md shadow-sm">
                          <div>
                            <label htmlFor="name">Name</label>
                            <input
                              id="name"
                              name="name"
                              type="text"
                              autoComplete="name"
                              required
                              value={formData.name}
                              onChange={handleChange}
                              className="relative block w-full appearance-none rounded-none rounded-t-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              placeholder="Full Name"
                            />
                          </div>
                          <div>
                            <label htmlFor="email">Email address</label>
                            <input
                              id="email"
                              name="email"
                              type="email"
                              autoComplete="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              className="relative block w-full appearance-none rounded-none rounded-t-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              placeholder="Email address"
                            />
                          </div>
                          <div>
                            <label htmlFor="mobile">Mobile Number</label>
                            <input
                              id="mobile"
                              name="mobile"
                              type="text"
                              required
                              value={formData.mobile}
                              onChange={handleChange}
                              className="relative block w-full appearance-none rounded-none rounded-b-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              placeholder="+91-8685019365"
                            />
                          </div>
                          <div>
                            <label htmlFor="referral">Referral Code</label>
                            <input
                              id="referral"
                              name="referral"
                              type="text"
                              autoComplete="referral"
                              value={formData.referral}
                              onChange={handleChange}
                              className="relative block w-full appearance-none rounded-none rounded-b-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              placeholder="referral code"
                            />
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <input
                              id="remember-me"
                              name="remember-me"
                              required
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor="remember-me"
                              className="ml-2 block text-sm text-gray-900"
                            >
                              <a href="https://docs.google.com/document/d/e/2PACX-1vScY6ySMIlcidLPYsALSF4GJUzurJsdaUEyPbcVNcH4gAA6LuE7XMVklec2dA1m8MnMVs7cxlTydXNP/pub?embedded=true" target="_blank">Accept Terms & Conditions</a>
                            </label>
                          </div>
                        </div>

                        <div>
                          <button
                            type="submit"
                            onClick={sendToSlack}
                             ref={completeButtonRef}
                            className="group relative flex w-full justify-center rounded-md border border-transparent bg-Blueviolet py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                              <LockClosedIcon
                                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                                aria-hidden="true"
                              />
                            </span>
                            Request Callback
                          </button>
                        </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Register;
