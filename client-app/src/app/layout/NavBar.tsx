import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';

interface Props {
    openForm: () => void;
}

export default function NavBar({openForm}: Props) {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src="/assets/ttf_logo.jpg" alt="logo" style={{marginRight: '10px'}} />
                    Talon Textiles Fasteners
                </Menu.Item>
                <Menu.Item name='Orders'/>
                <Menu.Item>
                    <Button onClick={openForm} positive content='Create Order' />
                </Menu.Item>
            </Container>
        </Menu>
    )
}