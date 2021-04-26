import React from 'react';
import { Container, Menu} from 'semantic-ui-react';

export default function Footer() {
    return (
        <Menu inverted fixed='bottom' style={{padding: '10px'}}>
            <Container inverted>
                <Menu.Item>©2021 - Talon Textile Fasteners, a fictitious business scenario set up for educational purposes by Upskilled RTO 40374 </Menu.Item>
                <Menu.Item as='a'>
                    Privacy Policy
                </Menu.Item>
                <Menu.Item as='a'>
                    Copyright Policy
                </Menu.Item>
            </Container>
        </Menu>
    )
}