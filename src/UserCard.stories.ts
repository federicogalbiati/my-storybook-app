import type { Meta, StoryObj } from '@storybook/react';
import { UserCard } from './UserCard';
import { userEvent, within } from '@storybook/testing-library';

const meta: Meta<typeof UserCard> = {
  title: 'UserCard',
  component: UserCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof UserCard>;

const onClick = async () => {
  await new Promise(resolve => setTimeout(resolve, 5000));
};

export const InitialState: Story = {
  args: {
    name: 'Mario Rossi',
    email: 'mario.rossi@example.com',
    onClick: onClick,
  },
};

export const WithPlayInteraction: Story = {
  args: {
    name: 'Luigi Bianchi',
    email: 'luigi.bianchi@example.com',
    onClick: onClick,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Trova il pulsante "Conferma"
    const button = canvas.getByRole('button', { name: /conferma/i });

    // Clicca sul pulsante
    await userEvent.click(button);

    // Aspetta che il messaggio "Utente confermato" venga visualizzato
    await canvas.findByText((content, element) => {
      return element?.textContent === 'Utente confermato';
    }, {}, { timeout: 6000 });
  },
};