import Media from 'components/Media';
import { ListItem as MUIListItem, ListItemAvatar, Avatar, ListItemText, Grid, Typography } from '@mui/material';

import Link from 'components/link/Link';

export type Link = {
    label: string;
    href: string;
    as?: string;
};

type Props = {
    name: string;
    image: string | null;
    link: Link;
};

export default function ListItem({ name, image, link }: Props) {
    return (
        <MUIListItem divider>
            <Grid container alignItems="center">
                <ListItemAvatar>
                    <Avatar alt={name} sx={(theme) => ({ backgroundColor: theme.palette.grey[200] })}>
                        {/* NextJS Image optimization example. Props are src(any file under the public dir), width, and height */}
                        <Media image={image} name={name} />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText>
                    <Typography variant="body1">{name}</Typography>
                </ListItemText>
                <Grid
                    container
                    item
                    xs={12}
                    md={3}
                    sx={(theme) => ({ justify: 'center', padding: theme.spacing(2) })}
                    justifyContent="flex-end"
                    alignItems="center"
                >
                    <Link href={link.href} as={link?.as}>
                        {link.label}
                    </Link>
                </Grid>
            </Grid>
        </MUIListItem>
    );
}
