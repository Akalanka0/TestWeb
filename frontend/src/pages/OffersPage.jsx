import React from 'react';

const OffersPage = () => {
    const deals = [
        { title: 'Summer Escape', discount: '20% OFF', description: 'Book 3 nights or more and get 20% off your stay.', code: 'SUMMER24' },
        { title: 'Weekend Getaway', discount: '15% OFF', description: 'Perfect for local travelers looking for a quick break.', code: 'WEEKEND15' },
        { title: 'Early Bird Special', discount: '25% OFF', description: 'Book at least 30 days in advance and save big.', code: 'EARLYBIRD' },
    ];

    return (
        <div className="page-container">
            <header style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h1>Exclusive Offers</h1>
                <p>Unlock special discounts and packages for your next stay at DreamStay Hotel.</p>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '30px' }}>
                {deals.map((deal, idx) => (
                    <div key={idx} style={{ background: 'white', padding: '30px', borderRadius: '12px', border: '2px dashed var(--secondary-color)', position: 'relative' }}>
                        <span style={{ position: 'absolute', top: '-15px', right: '20px', background: 'var(--secondary-color)', color: 'white', padding: '5px 15px', borderRadius: '20px', fontWeight: 'bold' }}>
                            {deal.discount}
                        </span>
                        <h2 style={{ marginTop: '0' }}>{deal.title}</h2>
                        <p>{deal.description}</p>
                        <div style={{ marginTop: '20px', background: '#f0f0f0', padding: '10px', borderRadius: '4px', textAlign: 'center', fontWeight: 'bold', letterSpacing: '2px' }}>
                            USE CODE: {deal.code}
                        </div>
                        <button className="btn btn-primary" style={{ width: '100%', marginTop: '20px' }}>Claim Offer</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OffersPage;
