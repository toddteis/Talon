import React from 'react';
import { Grid, Header, Image, Segment } from 'semantic-ui-react';

export default function ContactPage() {
    return (
        <Segment>
            <Grid celled='internally'>
                <Grid.Row>
                    <Grid.Column width={16} textAlign='center'>
                        <Header as='h1'>Contact Talon Textiles Fasteners</Header>
                        <p><i>Providing a sustainable product that will carry the drying industry into the future.</i></p>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row textAlign='justified'>
                    <Grid.Column width={3}>
                        <Image src='/assets/south-australia-map.png' />
                    </Grid.Column>

                    <Grid.Column width={13}>
                        <Header as='h3' textAlign='left'>TTF Company Profile</Header>
                        <p><b>TTF was formed in the same year that the colony of South Australia enacted legislation giving women the vote in 1894.
                    </b></p>
                        <p>We operate out of head office in the Northern Adelaide suburbs (40 staff) with ‘Lines for ALL Purposes’.
                            <ul>
                                <li>Mount Burr (25 staff)</li>
                                <li>Port Pirie (1 staff)</li>
                                <li>Port Adelaide (6 staff)</li>
                            </ul>
                        Agent’s offices are dotted around the globe but are not part of TTF. Manufacturing,
                         warehousing and distribution are all operated from Head Office with some overflow
                          at ‘Lines for ALL Purposes’ at Port Adelaide.
                    </p>
                        <p>

                        </p>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row textAlign='justified'>
                    <Grid.Column width={3}>

                    </Grid.Column>

                    <Grid.Column width={13}>
                        <Header as='h3' textAlign='left'>Office Hours</Header>
                        <p><b>Monday-Friday</b></p>
                        <p>9-12pm, 1-4pm AEST</p>
                        <p>info@talontextilefasteners.com.au</p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}