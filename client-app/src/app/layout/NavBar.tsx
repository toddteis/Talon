import { observer } from 'mobx-react-lite';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Dropdown, Menu } from 'semantic-ui-react';
import LoginForm from '../../features/users/LoginForm';
import RegisterForm from '../../features/users/RegisterForm';
import { useStore } from '../stores/store';



export default observer(function NavBar() {
    const { userStore, modalStore } = useStore();
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} to='/' exact header>
                    <img src="/assets/ttf_logo.jpg" alt="logo" style={{ marginRight: '10px' }} />
                    Talon Textiles Fasteners
                </Menu.Item>
                <Menu.Item as={NavLink} to='/products' name='Products' />
                <Menu.Item as={NavLink} to='/about' name='About us' />
                <Menu.Item as={NavLink} to='/contact' name='Contact us' />
                <Menu.Item as={NavLink} to='/resources' name='Resources' />
                <Menu.Item as={NavLink} to='/orders' name='Orders' />
                <Menu.Item as={NavLink} to='/errors' name='Errors' />
                <Menu.Item>
                    <Button as={NavLink} to='/createOrder' positive content='Create Order' />
                </Menu.Item>
                <Menu.Item position='right'>
                    {userStore.isLoggedIn ? (
                        <Dropdown pointing='top left' text={userStore.user?.displayName}>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={userStore.logout} text='Logout' icon='power' />
                            </Dropdown.Menu>
                        </Dropdown>
                    ) : (
                        <>
                            <Button.Group>
                                <Button onClick={() => modalStore.openModal(<LoginForm />)} positive content='Login' />
                                <Button.Or />
                                <Button onClick={() => modalStore.openModal(<RegisterForm />)} positive content='Register!' />
                            </Button.Group>

                        </>
                    )}

                </Menu.Item>
            </Container>
        </Menu>
    )
})