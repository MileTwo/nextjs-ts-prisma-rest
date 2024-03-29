import { Tool } from '@prisma/client';

export const tools: Omit<Tool, 'id'>[] = [
    {
        name: 'TypeScript',
        description:
            'TypeScript extends JavaScript by adding types. By understanding JavaScript, TypeScript saves you time catching errors and providing fixes before you run code. Any browser, any OS, anywhere JavaScript runs. Entirely Open Source.',
        link: 'https://www.typescriptlang.org/',
        image: '/typescript.svg',
    },
    {
        name: 'Prisma',
        description:
            'Prisma helps app developers build faster and make fewer errors with an open source ORM for PostgreSQL, MySQL and SQLite.',
        link: 'https://www.prisma.io/',
        image: '/prisma.svg',
    },
    {
        name: 'Material UI',
        description:
            'React components for faster and easier web development. Build your own design system, or start with Material Design.',
        link: 'https://material-ui.com/',
        image: '/material-ui.svg',
    },
    {
        name: 'SWR',
        description:
            'The name “SWR” is derived from stale-while-revalidate, a HTTP cache invalidation strategy popularized by HTTP RFC 5861. SWR is a strategy to first return the data from cache (stale), then send the fetch request (revalidate), and finally come with the up-to-date data.',
        link: 'https://swr.vercel.app/',
        image: '/swr.svg',
    },
    {
        name: 'React Hook Forms',
        description: 'Performant, flexible and extensible forms with easy-to-use validation.',
        link: 'https://react-hook-form.com/',
        image: '/react-hook-form.jpeg',
    },
    {
        name: 'Jest',
        description:
            'Jest is a delightful JavaScript Testing Framework with a focus on simplicity. It works with projects using: TypeScript, Node, React, Angular, Vue and more!',
        link: 'https://jestjs.io/',
        image: '/jest.svg',
    },
    {
        name: 'Testing Library',
        description: 'Simple and complete testing utilities that encourage good testing practices',
        link: 'https://testing-library.com/',
        image: '/testing-library.png',
    },
    {
        name: 'ESLint',
        description: `ESLint statically analyzes your code to quickly find problems. ESLint is built into most text editors and you can run ESLint as part of your continuous integration pipeline. Many problems ESLint finds can be automatically fixed. ESLint fixes are syntax-aware so you won't experience errors introduced by traditional find-and-replace algorithms. Preprocess code, use custom parsers, and write your own rules that work alongside ESLint's built-in rules. You can customize ESLint to work exactly the way you need it for your project.`,
        link: 'https://eslint.org/',
        image: '/eslint.svg',
    },
    {
        name: 'Prettier',
        description:
            'An opinionated code formatter. Supports many languages. Integrates with most editors. Has few options',
        link: 'https://prettier.io/',
        image: '/prettier.png',
    },
    {
        name: 'Deque Axe',
        description:
            'Test your React application with the axe-core accessibility testing library. Results will show in the Chrome DevTools console.',
        link: 'https://github.com/dequelabs/axe-core-npm/blob/develop/packages/react/README.md',
        image: '/axe.svg',
    },
];
