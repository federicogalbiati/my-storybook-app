import React, { useState } from 'react';

type UserCardProps = {
    name: string;
    email: string;
    onClick: () => Promise<void>;
};

export const UserCard: React.FC<UserCardProps> = ({ name, email, onClick }) => {
    const [confirmationMessage, setConfirmationMessage] = useState<string | null>(null);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const handleButtonClick = async () => {
        setIsButtonDisabled(true);
        await onClick();
        setConfirmationMessage("Utente confermato");
        setIsButtonDisabled(false);
    };

    return (
        <div style={{ border: '1px solid #ccc', padding: '10px'}}>
            <h3>{name}</h3>
            <p>{email}</p>
            <button onClick={handleButtonClick} disabled={isButtonDisabled}>Conferma</button>
            {confirmationMessage && <div>{confirmationMessage}</div>}
        </div>
    );
};

