import React from 'react';
import { Grid, Header, Image, List, Segment } from 'semantic-ui-react';

export default function ProductsPage() {
    return (
        <Segment>
            <Grid celled='internally'>
                <Grid.Row>
                    <Grid.Column width={16} textAlign='center'>
                        <Header as='h1'>Talon Textiles Fasteners</Header>
                        <p><i>Providing a sustainable product that will carry the drying industry into the future.</i></p>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row textAlign='justified'>
                    <Grid.Column width={3}>
                        <Image src='/assets/pegs1.jpg' />
                    </Grid.Column>

                    <Grid.Column width={13}>
                        <Header as='h3' textAlign='left'>TTF Products</Header>
                        <p><b>We are a stable company that sticks with what works. 
                            The first hinged peg was patented in 1832 and used a wooden screw as a pivot point. 
                        </b></p>
                        <p>
                        As you can see by today’s design this did not last long. 
                        The hinged peg was patented by David M. Smith in 1853 using a lever action with a metal spring. 
                        We decided to change to this type of design some 100 years after the original patent being 
                        granted as we did not want to jump into something that may not work. We also were mindful of the availability of steel.
                         In around 1955, we lodged our own patent for a peg along with around 149 other patents for pegs in the mid-1900s. 
                         This is the peg we make today and it has been very successful for us.
                        </p>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row textAlign='justified'>
                    <Grid.Column width={3}>
                        <Image src='/assets/pegs2.jpg' />
                    </Grid.Column>

                    <Grid.Column width={13}>
                        <Header as='h3' textAlign='left'>Sustainability</Header>
                        <p><b>We did not change to plastic as a base material for our pegs and we believe that decision is about to pay off for us
                        </b></p>
                        <p>
                        We use renewable resources to manufacture our product consisting of plantation tree wood and recycled steel.
                         We will acquire a sustainable forest of plantation wood in Mt. Burr in the South East of South Australia.
                        </p>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row textAlign='justified'>
                    <Grid.Column width={3}>
                        <Image src='/assets/pegs3.jpg' />
                    </Grid.Column>

                    <Grid.Column width={13}>
                        <Header as='h3' textAlign='left'>Product Support</Header>
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
                        <List celled horizontal  floated='right' textAlign='center'>
                                <List.Item as='a'>Customer Service Policy</List.Item>
                                <List.Item as='a'>Delivery Policy</List.Item>
                                <List.Item as='a'>Return Policy</List.Item>
                        </List>
                    </Grid.Column>
                </Grid.Row>
             </Grid>
        </Segment>
    )
}