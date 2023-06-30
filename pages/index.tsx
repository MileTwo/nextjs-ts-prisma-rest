import { GetServerSideProps } from 'next';
import { Typography, List, Grid, Button } from '@mui/material';
import useSWR from 'swr';
import Layout from 'components/layout';
import prisma, { Tool } from 'services/prisma';
import restEndpoints from 'lib/restEndpoints';
import { fetcher } from 'lib/fetcher';
import { useState } from 'react';
import ToolDialog from 'components/dialog/ToolDialog';
import ListItem, { Link } from 'components/list/ListItem';

interface Props {
    tools: Tool[];
}

export default function Home({ tools }: Props) {
    // CSR(Client-side rendering) example
    const { data } = useSWR<Tool[]>(restEndpoints.tools, fetcher, { fallbackData: tools });
    const [dialogOpen, setDialogOpen] = useState(false);

    return (
        <>
            <Layout title="Next.js example">
                <Grid container spacing={4} direction="column" sx={{ padding: '2em' }}>
                    <Grid item container spacing={4} direction="column">
                        <Grid
                            item
                            container
                            spacing={4}
                            alignContent="center"
                            justifyContent="center"
                            direction="column"
                        >
                            <Grid item container justifyContent="center">
                                <Typography variant="h5" component="h2">
                                    Tools
                                </Typography>
                            </Grid>
                            <Grid item container justifyContent="center">
                                <Button variant="contained" color="primary" onClick={() => setDialogOpen(true)}>
                                    Create
                                </Button>
                            </Grid>
                            <ToolDialog open={dialogOpen} onClose={() => setDialogOpen(false)} />
                        </Grid>
                        <Grid item container justifyContent="center">
                            <List
                                aria-label={tools.join(', ')}
                                sx={(theme) => ({
                                    minWidth: theme.breakpoints.values.sm,
                                    [theme.breakpoints.down('sm')]: {
                                        width: '100%',
                                        minWidth: 100,
                                    },
                                })}
                            >
                                {data?.map(({ name, image, id }) => {
                                    const link: Link = {
                                        href: '/tool/[id]',
                                        as: `/tool/${id}`,
                                        label: 'Learn More',
                                    };
                                    return <ListItem key={name} name={name} image={image} link={link} />;
                                })}
                            </List>
                        </Grid>
                    </Grid>
                </Grid>
            </Layout>
        </>
    );
}

// SSR (server-side rendering) example
export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const tools = await prisma().tool.findMany();

    return {
        props: {
            tools,
        },
    };
};
