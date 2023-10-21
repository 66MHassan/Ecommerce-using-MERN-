import React from 'react'

const Contact = () => {
  return (
    <>
    <h1 className='text-center py-4'>Contact us feel free
    </h1>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.529161138197!2d71.50500073334061!3d34.00462570350838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d9171903c0b0bf%3A0x744e29c9fbee045f!2sHamayun%20Tower%D8%8C%20Near%20Warid%20Main%20Office%2C%20and%20PSO%2C%20University%20Rd%2C%20Tehkal%2C%20Peshawar%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1696416551307!5m2!1sen!2s" width="100%" height="300px" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

    <div className="container mt-5 contact-form my-3">
        
        <form action='https://formspree.io/f/xbjvppgq' method='POST'>
            <div className="mb-3 ">
                <label for="user" className="form-label" >User</label>
                <input type="text" className="form-control" name="userName" placeholder="Enter your username" required />
            </div>
            <div className="mb-3">
                <label for="email" className="form-label">Email</label>
                <input type="email" className="form-control" name='Email' placeholder="Enter your email" required />
            </div>
            <div className="mb-3">
                <label for="textarea" className="form-label">Textarea</label>
                <textarea name='Message' className="form-control" id="textarea" rows="4" placeholder="Enter your message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary mb-3">Submit</button>
        </form>
    </div>
    </>
  )
}

export default Contact