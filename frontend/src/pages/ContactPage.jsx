import React from 'react';

const ContactPage = () => {
    return (
        <div className="page-container">
            <div style={{ display: 'flex', gap: '50px', flexWrap: 'wrap' }}>
                <div style={{ flex: '1', minWidth: '300px' }}>
                    <h1>Get in Touch</h1>
                    <p>Have questions or need assistance with your booking? Our team is available 24/7 to help you.</p>

                    <div style={{ marginTop: '30px' }}>
                        <p><strong>Address:</strong> 123 Luxury Lane, Paradise Island, Maldives</p>
                        <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                        <p><strong>Email:</strong> support@dreamstay.com</p>
                    </div>

                    <div style={{ marginTop: '30px', height: '300px', background: '#ddd', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        [Interactive Map Placeholder]
                    </div>
                </div>

                <div style={{ flex: '1', minWidth: '300px', background: 'white', padding: '30px', borderRadius: '12px', boxShadow: 'var(--shadow)' }}>
                    <h2>Send us a Message</h2>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <label>Your Name</label>
                            <input type="text" placeholder="Full Name" style={{ padding: '12px', borderRadius: '4px', border: '1px solid #ddd' }} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <label>Email Address</label>
                            <input type="email" placeholder="email@example.com" style={{ padding: '12px', borderRadius: '4px', border: '1px solid #ddd' }} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <label>Subject</label>
                            <select style={{ padding: '12px', borderRadius: '4px', border: '1px solid #ddd' }}>
                                <option>General Inquiry</option>
                                <option>Booking Problem</option>
                                <option>Feedback</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <label>Message</label>
                            <textarea rows="5" placeholder="How can we help you?" style={{ padding: '12px', borderRadius: '4px', border: '1px solid #ddd' }}></textarea>
                        </div>
                        <button type="button" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
