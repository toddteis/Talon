import React from 'react';
import { Grid, GridColumn, Header, Image, Segment } from 'semantic-ui-react';

export default function HomePage() {
    return (
        <Segment>
            <Grid celled='internally'>
                <Grid.Row>
                    <GridColumn width={16} textAlign='center'>
                        <Header as='h1'>Welcome to Talon Textiles Fasteners</Header>
                        <p><i>Providing a sustainable product that will carry the drying industry into the future.</i></p>
                    </GridColumn>
                </Grid.Row>

                <Grid.Row textAlign='justified'>
                    <Grid.Column width={3}>
                        <Image src='/assets/image.png' />
                    </Grid.Column>

                    <Grid.Column width={13}>
                        <Header as='h3' textAlign='left'>News Item 1</Header>
                        <p><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Elementum eu facilisis sed odio morbi quis commodo odio. 
                        </b></p>
                        <p>
                            Ac feugiat sed lectus vestibulum mattis ullamcorper velit.
                            Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero.
                            Suscipit tellus mauris a diam maecenas sed enim ut sem. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim.
                            Ultricies lacus sed turpis tincidunt id. Blandit libero volutpat sed cras ornare arcu dui.
                            Amet dictum sit amet justo donec enim diam vulputate. Montes nascetur ridiculus mus mauris vitae.
                            Senectus et netus et malesuada fames ac. Est lorem ipsum dolor sit amet consectetur. Pellentesque eu tincidunt tortor aliquam.
                            Nunc pulvinar sapien et ligula ullamcorper.
                        </p>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row textAlign='justified'>
                    <Grid.Column width={3}>
                        <Image src='/assets/image.png' />
                    </Grid.Column>

                    <Grid.Column width={13}>
                        <Header as='h3' textAlign='left'>News Item 2</Header>
                        <p><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Elementum eu facilisis sed odio morbi quis commodo odio. 
                        </b></p>
                        <p>
                            Ac feugiat sed lectus vestibulum mattis ullamcorper velit.
                            Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero.
                            Suscipit tellus mauris a diam maecenas sed enim ut sem. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim.
                            Ultricies lacus sed turpis tincidunt id. Blandit libero volutpat sed cras ornare arcu dui.
                            Amet dictum sit amet justo donec enim diam vulputate. Montes nascetur ridiculus mus mauris vitae.
                            Senectus et netus et malesuada fames ac. Est lorem ipsum dolor sit amet consectetur. Pellentesque eu tincidunt tortor aliquam.
                            Nunc pulvinar sapien et ligula ullamcorper.
                        </p>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row textAlign='justified'>
                    <Grid.Column width={3}>
                        <Image src='/assets/image.png' />
                    </Grid.Column>

                    <Grid.Column width={13}>
                        <Header as='h3' textAlign='left'>News Item 3</Header>
                        <p><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Elementum eu facilisis sed odio morbi quis commodo odio. 
                        </b></p>
                        <p>
                            Ac feugiat sed lectus vestibulum mattis ullamcorper velit.
                            Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero.
                            Suscipit tellus mauris a diam maecenas sed enim ut sem. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim.
                            Ultricies lacus sed turpis tincidunt id. Blandit libero volutpat sed cras ornare arcu dui.
                            Amet dictum sit amet justo donec enim diam vulputate. Montes nascetur ridiculus mus mauris vitae.
                            Senectus et netus et malesuada fames ac. Est lorem ipsum dolor sit amet consectetur. Pellentesque eu tincidunt tortor aliquam.
                            Nunc pulvinar sapien et ligula ullamcorper.
                        </p>
                    </Grid.Column>
                </Grid.Row>
             </Grid>
        </Segment>
    )
}