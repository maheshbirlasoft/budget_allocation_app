import React, { useContext,useState } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyDropdown = ({ onChange }) => {

    const { dispatch  } = useContext(AppContext);

    const currencyOptions = [
        { value: '$', label: '$ Doller' },
        { value: '£', label: '£ Pound' },
        { value: '€', label: '€ Euro' },
        { value: '₹', label: '₹ Ruppee' },
    ];

    const [selectedCurrency, setSelectedCurrency] = useState('');

    const handleChange = (e) => {
        const selectedCurrency = e.target.value;
        setSelectedCurrency(selectedCurrency);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: selectedCurrency,
        });
        if (onChange) {
            onChange(selectedCurrency);
        }
    };
    return (
        // <div className='alert alert-success'>
            <select class= 'alert alert-success' style={{border:'none'}} value={selectedCurrency} onChange={handleChange}>
                <option value="">Currency</option>
                {currencyOptions.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
        // </div>
    );
};

export default CurrencyDropdown;
