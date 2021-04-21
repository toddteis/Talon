import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';
import { useStore } from '../stores/store';

export default function NavBar() {
    const {orderStore} = useStore();

    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src="/assets/ttf_logo.jpg" alt="logo" style={{marginRight: '10px'}} />
                    Talon Textiles Fasteners
                </Menu.Item>
                <Menu.Item name='Orders'/>
                <Menu.Item>
                    <Button onClick={() => orderStore.openForm()} positive content='Create Order' />
                </Menu.Item>
            </Container>
        </Menu>
    )
}