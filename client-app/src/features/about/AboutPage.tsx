import React from 'react';
import { Grid, Header, Image, Segment } from 'semantic-ui-react';

export default function AboutPage() {
    return (
        <Segment>
            <Grid celled='internally'>
                <Grid.Row>
                    <Grid.Column width={16} textAlign='center'>
                        <Header as='h1'>About Talon Textiles Fasteners</Header>
                        <p><i>Providing a sustainable product that will carry the drying industry into the future.</i></p>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row textAlign='justified'>
                    <Grid.Column width={3}>
                        <Image src='/assets/pegs1.jpg' />
                    </Grid.Column>

                    <Grid.Column width={13}>
                        <Header as='h3' textAlign='left'>TTF Company Profile</Header>
                        <p><b>TTF was formed in the same year that the colony of South Australia enacted legislation giving women the vote in 1894.
                    </b></p>
                        <p>We started off from humble beginnings making the push on style of clothes pegs.
                        We did this successfully for many decades with our products finding penetration
                        into overseas markets. These humble beginnings soon lifted us to great heights.
                        Since humble beginnings in 1894, TTF have grown and continue to expand.
                    </p>
                        <p>
                            The company was formed on a belief that consumers had a right to use quality textile
                            fasteners when completing one of the most fundamental tasks of modern humans, washing
                            and drying clothes. We have not been quick to jump into fads like hinged fasteners or
                            plastic substitutes. We have formed partnerships with our suppliers and continue to
                            develop these today. We will maintain and strengthen our relationship and shared
                            R&D with ‘Lines for ALL Purposes’ and pursue new markets with them in joint marketing exercises.
                    </p>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row textAlign='justified'>
                    <Grid.Column width={3}>
                        <Image src='/assets/pegs2.jpg' />
                    </Grid.Column>

                    <Grid.Column width={13}>
                        <Header as='h3' textAlign='left'>Partnerships</Header>
                        <p><b>Ac feugiat sed lectus vestibulum mattis ullamcorper velit.
                    </b></p>
                        <p>
                            We will maintain our partnership with ‘Springy Things ‘R’ US’ in Port Pirie who manufacture our springs.
                            They have committed that they will keep all processing on shore for us in order for us to be able to react
                            to market trends quickly.
                    </p>
                    </Grid.Column>
                </Grid.Row>
                
                <Grid.Row textAlign='center'>
                    <Grid.Column>
                    <h2>Meet the executive team</h2>
                    </Grid.Column>
                    
                </Grid.Row>


                <Grid.Row textAlign='justified'>
                    <Grid.Column width={3}>
                        <Image src='/assets/peggy-ceo.jpg' />
                    </Grid.Column>

                    <Grid.Column width={5}>
                        <Header as='h3' textAlign='left'>Peggy Woodroofe</Header>
                        <p><b>CEO
                    </b></p>
                        <p>
                            Ac feugiat sed lectus vestibulum mattis ullamcorper velit.
                            Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero.
                            Suscipit tellus mauris a diam maecenas sed enim ut sem. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim.
                    </p>
                    </Grid.Column>

                    <Grid.Column width={3}>
                        <Image src='/assets/eddie-cfo.jpg' />
                    </Grid.Column>

                    <Grid.Column width={5}>
                        <Header as='h3' textAlign='left'>Eddie Springston</Header>
                        <p><b>CFO
                    </b></p>
                        <p>
                            Ac feugiat sed lectus vestibulum mattis ullamcorper velit.
                            Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero.
                            Suscipit tellus mauris a diam maecenas sed enim ut sem. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim.
                    </p>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row textAlign='justified'>
                    <Grid.Column width={3}>
                        <Image src='/assets/nigel-cio.jpg' />
                    </Grid.Column>

                    <Grid.Column width={5}>
                        <Header as='h3' textAlign='left'>Nigel Techner</Header>
                        <p><b>CIO
                    </b></p>
                        <p>
                            Ac feugiat sed lectus vestibulum mattis ullamcorper velit.
                            Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero.
                            Suscipit tellus mauris a diam maecenas sed enim ut sem. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim.
                    </p>
                    </Grid.Column>

                    <Grid.Column width={3}>
                        <Image src='/assets/ash-sm.jpg' />
                    </Grid.Column>

                    <Grid.Column width={5}>
                        <Header as='h3' textAlign='left'>Ash Greenway</Header>
                        <p><b>SM
                    </b></p>
                        <p>
                            Ac feugiat sed lectus vestibulum mattis ullamcorper velit.
                            Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero.
                            Suscipit tellus mauris a diam maecenas sed enim ut sem. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim.
                    </p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}