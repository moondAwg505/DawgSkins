import type { Meta, StoryObj } from '@storybook/react'
import { ProfileButton } from './profileButton'

const meta: Meta<typeof ProfileButton> = {
    title: 'Components/ProfileButton',
    component: ProfileButton,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        name: {
            control: 'text',
            description: 'Имя пользователя, отображаемое на кнопке',
        },
    },
}

export default meta
type Story = StoryObj<typeof ProfileButton>

export const Default: Story = {
    args: {},
}

export const WithName: Story = {
    args: {
        name: 'Иван Иванов',
    },
}

export const ShortName: Story = {
    args: {
        name: 'moon',
    },
}

export const AllStates: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
            <ProfileButton />
            <ProfileButton name='Иван Иванов' />
            <ProfileButton name='Александра Александровна Петрова' />
        </div>
    ),
    parameters: {
        controls: { disable: true },
    },
}