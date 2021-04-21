import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';

export default function NavBar() {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} to='/' exact header>
                    <img src="/assets/ttf_logo.jpg" alt="logo" style={{marginRight: '10px'}} />
                    Talon Textiles Fasteners
                </Menu.Item>
                <Menu.Item as={NavLink} to='/products' name='Products'/>
                <Menu.Item as={NavLink} to='/about' name='About us'/>
                <Menu.Item as={NavLink} to='/contact' name='Contact us'/>
                <Menu.Item as={NavLink} to='/resources' name='Resources'/>
                <Menu.Item as={NavLink} to='/orders' name='Orders'/>
                <Menu.Item>
                    <Button as={NavLink} to='/createOrder' positive content='Create Order' />
                </Menu.Item>
            </Container>
        </Menu>
    )
}