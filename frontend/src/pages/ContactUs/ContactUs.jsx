import { useState } from "react";
const ContactUs = () => {

    const contactMethods = [
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
            ,
            contact: "avishkarhyperloop@smail.iitm.ac.in"
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
            ,
            contact: "Phone: +91 9927032865 (Pranav Singhal), +91 7000626132 (Prateek Sharma)"
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
            ,
            contact: "Sudha and Shankar Innovation Hub, IIT Madras, Guindy, Chennai - 600036"
        },
    ]

    // --------------- form validate ---------

    const validate = () => {
        const newErrors = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = "Full name is required";
        }

        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }

        if (!formData.company.trim()) {
            newErrors.company = "Company is required";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        }

        return newErrors;
    };

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        company: "",
        message: ""
    });

    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            alert("Form submitted successfully!");
            console.log("Form data:", formData);
            setFormData({
                fullName: "",
                email: "",
                company: "",
                message: ""
            });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    // --------------- form validate ---------

    return (
        <main className="py-24 h-screen grid place-items-center">
            <div className="  max-w-6xl w-full mx-auto px-4 text-gray-600 md:px-8">
                <h3 className="text-white mb-5 font-semibold text-center text-3xl sm:text-4xl"> Contact</h3>
                <div className=" mx-auto gap-12 justify-between lg:flex lg:max-w-none">
                    <div className="max-w-lg space-y-3">
                        <p className="text-white text-3xl font-semibold sm:text-4xl">
                            Let us know how we can help
                        </p>
                        <p>
                            We’re here to help and answer any question you might have, We look forward to hearing from you! Please fill out the form, or us the contact information bellow .
                        </p>
                        <div>
                            <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-6 items-center">
                                {
                                    contactMethods.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-x-3">
                                            <div className="flex-none text-gray-400">
                                                {item.icon}
                                            </div>
                                            <p>{item.contact}</p>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="flex-1 formBg">
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="font-medium">Full name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#28B384] shadow-sm rounded-lg"
                                />
                                {errors.fullName && (
                                    <p className="text-red-500 text-sm">{errors.fullName}</p>
                                )}
                            </div>
                            <div>
                                <label className="font-medium">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#28B384] shadow-sm rounded-lg"
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm">{errors.email}</p>
                                )}
                            </div>
                            <div>
                                <label className="font-medium">Company</label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#28B384] shadow-sm rounded-lg"
                                />
                                {errors.company && (
                                    <p className="text-red-500 text-sm">{errors.company}</p>
                                )}
                            </div>
                            <div>
                                <label className="font-medium">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-[#28B384] shadow-sm rounded-lg"
                                />
                                {errors.message && (
                                    <p className="text-red-500 text-sm">{errors.message}</p>
                                )}
                            </div>
                            <button
                                type="submit"
                                className="w-full px-4 py-2 text-white font-medium bg-[#28B384] hover:bg-[#28B384] active:bg-[#28B384] rounded-pill duration-150"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default ContactUs