// you want to import from test-utils instead of testing-library/react since we overwrote the render function to support our wrapper providers
import { tools } from 'lib/tools';
import Tool, { getServerSideProps } from 'pages/tool/[id]';
import { Context, createMockContext, MockContext } from '../context';
import { prismaMock } from '../singleton';
import { render, screen } from '../test-utils';

describe('Tool Page', () => {
    let mockCtx: MockContext
    let ctx: Context
    beforeEach(() => {
        mockCtx = createMockContext()
        ctx = mockCtx as unknown as Context
    })
    it('should render  a page without errors', async () => {
        render(<Tool tool={{ ...tools[0], id: 0 }} />);

        // go home button
        expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
        // header
        expect(screen.getByRole('heading', { name: tools[0].name })).toBeInTheDocument();
        // image
        expect(screen.getByTestId('image')).toBeInTheDocument();
        // description
        expect(screen.getByText(tools[0].description));
        // link to docs
        expect(screen.getByText(`Visit ${tools[0].name} documentation`)).toBeInTheDocument();
    });

    it('should fail to render a page', async () => {
        //@ts-ignore
        render(<Tool />);
        expect(screen.getByText('Tool not found.')).toBeInTheDocument();
    });

    it('should create a tool', async () => {
        const tool = {
            id: 1,
                name: 'name',
                description: 'description',
                link: 'link',
                image: 'image'
          }

          prismaMock.tool.create.mockResolvedValue(tool);

          const createTool = await prismaMock.tool.create({
            data: tool,
          })

          await expect(createTool).toEqual({
            id: 1,
            name: 'name',
            description: 'description',
            link: 'link',
            image: 'image'
          })

    });

    it('should return notFound getServerSideProps', async () => {
        // @ts-ignore
        expect(await getServerSideProps(ctx, { params: {} })).toEqual({ notFound: true });

        // @ts-ignore
        expect(await getServerSideProps(ctx, { params: { id: '-1' } })).toEqual({ notFound: true });
    });
});
