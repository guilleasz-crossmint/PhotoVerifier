import React, { useState } from 'react';
import { createWallet } from './actions';

const App = () => {
    const [email, setEmail] = useState('');

    const handleCreateWallet = () => {
        createWallet(email);  // Llama a createWallet con el email ingresado
    };

    return (
        <div>
            <input 
                type="email" 
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email"
            />
            <button onClick={handleCreateWallet}>Create Wallet</button>
        </div>
    );
};

export default App;
