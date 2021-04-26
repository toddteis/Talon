import React from 'react';
import {  Grid, Header, List, Segment } from 'semantic-ui-react';

export default function ResourcesPage() {
    return (
        <Segment>
            <Grid celled='internally'>
                <Grid.Row>
                    <Grid.Column width={16} textAlign='center'>
                        <Header as='h1'>TTF Forms and Resources</Header>
                        <p><i>Providing a sustainable product that will carry the drying industry into the future.</i></p>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row textAlign='justified'>
                    <Grid.Column width={8}>
                        <Header as='h3' textAlign='center'>WHS Procedures</Header>
                        <List as='ul'>
                            <List.Item as='li'>
                                <a href="#/ResourcesPage">Code of Conduct</a>
                            </List.Item>
                            <List.Item as='li'>
                                <a href="#/ResourcesPage">First Aid in the Workplace</a>
                            </List.Item>
                            <List.Item as='li'>
                                <a href="#/ResourcesPage">How to Manage Work Health and Safety Risks</a>
                            </List.Item>
                            <List.Item as='li'>
                                <a href="#/ResourcesPage">HR Manual</a>
                            </List.Item>
                            <List.Item as='li'>
                                <a href="#/ResourcesPage">Managing Noise and Preventing Hearing Loss at Work</a>
                            </List.Item>
                            <List.Item as='li'>
                                <a href="#/ResourcesPage">Managing the Work Environment and Facilities</a>
                            </List.Item>
                            <List.Item as='li'>
                                <a href="#/ResourcesPage">Managing Risks Plant</a>
                            </List.Item>
                            <List.Item as='li'>
                                <a href="#/ResourcesPage">Model Work Health and Safety Bill 23 June 2011</a>
                            </List.Item>
                            <List.Item as='li'>
                                <a href="#/ResourcesPage">Incident Summary Report</a>
                            </List.Item>
                            <List.Item as='li'>
                                <a href="#/ResourcesPage">Machine Inspection Report</a>
                            </List.Item>
                            <List.Item as='li'>
                                <a href="#/ResourcesPage">Work Health and Safety management Plan</a>
                            </List.Item>
                        </List>
                    </Grid.Column>

                    <Grid.Column width={8}>
                        <Header as='h3' textAlign='center'>Form & Reports</Header>
                        <List as='ul'>
                            <List.Item as='li'>
                                <a href="#/ResourcesPage">Customer Complaints</a>
                            </List.Item>
                            <List.Item as='li'>
                                <a href="#/ResourcesPage">Customer Feedback Blank Survey</a>
                            </List.Item>
                            <List.Item as='li'>
                                <a href="#/ResourcesPage">Customer Feedback Survey Results</a>
                            </List.Item>
                            <List.Item as='li'>
                                <a href="#/ResourcesPage">Disaster Recovery</a>
                            </List.Item>
                            <List.Item as='li'>
                                <a href="#/ResourcesPage">Employee Report</a>
                            </List.Item>
                            <List.Item as='li'>
                                <a href="#/ResourcesPage">Green Office Policy</a>
                            </List.Item>
                            <List.Item as='li'>
                                <a href="#/ResourcesPage">Job Description</a>
                            </List.Item>
                            <List.Item as='li'>
                                <a href="#/ResourcesPage">Organisational Chart</a>
                            </List.Item>
                            <List.Item as='li'>
                                <a href="#/ResourcesPage">Performance Mgt Plan</a>
                            </List.Item>
                            <List.Item as='li'>
                                <a href="#/ResourcesPage">Profit & Loss Statement</a>
                            </List.Item>
                            <List.Item as='li'>
                                <a href="#/ResourcesPage">Staff Meeting Minutes</a>
                            </List.Item>
                            <List.Item as='li'>
                                <a href="#/ResourcesPage">Style Guide</a>
                            </List.Item>
                        </List>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}