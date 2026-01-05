import React from 'react';
import './LandingPage/LandingPage.css'; // Reusing some base styles

const BookingPage = () => {
    const rooms = [
        { id: 1, name: 'Deluxe Suite', price: '$250/night', image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80' },
        { id: 2, name: 'Ocean View Room', price: '$180/night', image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80' },
        { id: 3, name: 'Family Villa', price: '$400/night', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80' },
    ];

    return (
        <div className="page-container">
            <header className="booking-header">
                <h1>Reserve Your Dreams</h1>
                <p>Choose from our selection of premium accommodations at DreamStay Hotel.</p>
            </header>

            <section className="booking-form-section">
                <div className="booking-card">
                    <h2>Find Your Perfect Room</h2>
                    <form className="horizontal-form">
                        <div className="form-input-group">
                            <label>Check-in</label>
                            <input type="date" />
                        </div>
                        <div className="form-input-group">
                            <label>Check-out</label>
                            <input type="date" />
                        </div>
                        <div className="form-input-group">
                            <label>Guests</label>
                            <select>
                                <option>1 Guest</option>
                                <option>2 Guests</option>
                                <option>3+ Guests</option>
                            </select>
                        </div>
                        <button type="button" className="btn btn-primary">Check Availability</button>
                    </form>
                </div>
            </section>

            <section className="room-selection">
                <h2>Available Accommodations</h2>
                <div className="rooms-grid">
                    {rooms.map(room => (
                        <div key={room.id} className="room-card">
                            <img src={room.image} alt={room.name} className="room-image" />
                            <div className="room-info">
                                <h3>{room.name}</h3>
                                <p className="price">{room.price}</p>
                                <button className="btn btn-primary">Book This Room</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <style>{`
        .booking-header { text-align: center; margin-bottom: 40px; }
        .booking-card { background: white; padding: 30px; border-radius: 12px; box-shadow: var(--shadow); margin-bottom: 50px; }
        .horizontal-form { display: flex; gap: 20px; align-items: flex-end; flex-wrap: wrap; }
        .form-input-group { flex: 1; display: flex; flexDirection: column; gap: 8px; min-width: 150px; }
        .form-input-group input, .form-input-group select { padding: 10px; border: 1px solid #ddd; border-radius: 4px; }
        
        .rooms-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 30px; }
        .room-card { background: white; border-radius: 12px; overflow: hidden; box-shadow: var(--shadow); transition: transform 0.3s ease; }
        .room-card:hover { transform: translateY(-5px); }
        .room-image { width: 100%; height: 200px; object-fit: cover; }
        .room-info { padding: 20px; }
        .room-info h3 { margin-top: 0; }
        .price { font-size: 1.2rem; font-weight: bold; color: var(--secondary-color); margin-bottom: 20px; }
      `}</style>
        </div>
    );
};

export default BookingPage;
