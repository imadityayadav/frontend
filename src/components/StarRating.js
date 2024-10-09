import React, { useState } from 'react';

const StarRating = ({ rating, onRatingChange }) => {
    const stars = [1, 2, 3, 4, 5];

    return (
        <div className="flex">
            {stars.map((star) => (
                <span
                    key={star}
                    className={`cursor-pointer ${rating >= star ? 'text-yellow-500' : 'text-gray-400'}`}
                    onClick={() => onRatingChange(star)}
                > ★
                </span>
            ))}
        </div>
    );
};

export default StarRating;
