import React,{useState} from 'react'

const ticket_calculator = () => {

    const cities = ["New York", "Los Angeles", "Chicago", "Miami", "San Francisco", "Houston"];
    
    const [formData, setFormData] = useState({
        location: '',
        destination: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Selected Location:", formData.location);
        console.log("Selected Destination:", formData.destination);
    };
  return (
  <div className="ticketCalculator py-24">
    <div className="container">
        <h3 className='text-white mb-2 font-semibold text-center text-3xl sm:text-4xl'>Ticket Pricing for Hyperloop Journeys</h3>
        <p className='text-white mb-5 font-normal text-center text-base'>Note: The ticket price is determined by two factors: distance and the population density of selected cities. The database comprises the top 450 cities in India.</p>
        <div className="row">
            <div className="col-md-6">
                <div className="mapIframe">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.956331180195!2d77.61427601489554!3d28.68709871489448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c624b9e9fa537%3A0xe913221902b7!2sAvishkar%20Hyperloop!5e0!3m2!1sen!2sin!4v1687638723854!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
            <div className="col-md-6">
            <div className="searchLocation formBg h-full">
            <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                    <label className="font-medium">Search Location</label>
                    <select
                        name="location"
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#28B384] shadow-sm rounded-lg"
                        onChange={handleChange}
                        value={formData.location}
                    >
                        <option value="">Select Location</option>
                        {cities.map((city, index) => (
                            <option key={index} value={city}>
                                {city}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="font-medium">Search Destination</label>
                    <select
                        name="destination"
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#28B384] shadow-sm rounded-lg"
                        onChange={handleChange}
                        value={formData.destination}
                    >
                        <option value="">Select Destination</option>
                        {cities.map((city, index) => (
                            <option key={index} value={city}>
                                {city}
                            </option>
                        ))}
                    </select>
                </div>

                <button
                    type="submit"
                    className="w-full px-4 py-2 text-white font-medium bg-[#28B384] hover:bg-[#28B384] active:bg-[#28B384] rounded-lg duration-150"
                >
                    Submit
                </button>
            </form>
        </div>
            </div>
        </div>
    </div>
  </div>
  )
}

export default ticket_calculator
