const restEndpoints = {
    tools: '/api/tool',
    tool: (id: number | string) => `/api/tool/${id}`,
};

export default restEndpoints;
