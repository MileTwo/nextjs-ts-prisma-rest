import { Button, Grid, Typography, Breadcrumbs } from '@mui/material';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import useSWR from 'swr';
import Media from 'components/Media';
import Layout from 'components/layout';
import { fetcher } from 'lib/fetcher';
import restEndpoints from 'lib/restEndpoints';
import prisma, { Tool } from 'services/prisma';

interface Props {
    tool: Tool;
}

interface URLParams {
    id?: string;
}

export default function ToolInfo({ tool }: Props): ReactElement {
    const { query }: { query: URLParams } = useRouter();
    // client side fetch
    const { data = tool } = useSWR<Tool>(query?.id ? restEndpoints.tool(query.id) : null, fetcher, {
        fallbackData: tool,
    });

    if (!data) {
        return (
            <Grid container spacing={4} sx={{ padding: '.5em 2em' }}>
                <Grid item xs={12}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link href="/" passHref>
                            Home
                        </Link>
                    </Breadcrumbs>
                </Grid>
                <Grid item xs={12} container>
                    <Typography variant="h3" component="p">
                        Tool not found.
                    </Typography>
                </Grid>
            </Grid>
        );
    }
    return (
        <>
            <Layout title={`${data.name} | Next.js example`}>
                <Grid container spacing={4} padding={6}>
                    <Grid item xs={12}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link href="/" passHref>
                                Home
                            </Link>
                            <Typography color="textPrimary">{data.name}</Typography>
                        </Breadcrumbs>
                    </Grid>
                    <Grid item xs={12} container justifyContent="center" alignItems="center">
                        {data.image && <Media image={data.image} name={data.name} aria-hidden="true" />}
                        <Typography
                            variant="h2"
                            sx={(theme) => ({ paddingLeft: '1em', color: theme.palette.text.secondary })}
                        >
                            {data.name}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} container justifyContent="center">
                        <Typography variant="body1" sx={{ maxWidth: '80ch' }}>
                            {data.description}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} container justifyContent="center">
                        <Button variant="contained" href={tool.link} target="_blank" color="primary">
                            Visit {tool.name} documentation
                        </Button>
                    </Grid>
                </Grid>
            </Layout>
        </>
    );
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ params }) => {
    if (params?.id) {
        const tool = await prisma().tool.findUnique({ where: { id: Number(params.id) } });
        if (tool) {
            return {
                props: { tool },
            };
        }
    }
    return {
        notFound: true,
    };
};
